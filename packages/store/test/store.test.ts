import { store } from '../src/store'

const sleep = (ms: any) => new Promise(r => setTimeout(r, ms))

describe('store', () => {
  let fn: any, fn2: any
  beforeEach(() => {
    fn = jest.fn()
    fn2 = jest.fn()
  })
  it('is defined', () => {
    expect(store).toBeDefined()
  })
  it('can add handler', () => {
    const unsub = store.on(fn)
    expect(unsub).toBeDefined()
    expect(typeof unsub).toEqual('function')
  })
  it('can get state when registered', () => {
    store.use({ count: 0 }, {})
    expect(store.state).toEqual({ count: 0 })
  })
  it('can get state after setState', () => {
    store.setState({ count: 10 }, 'up')
    expect(store.state).toEqual({ count: 10 })
  })
  it('can modify existing state', () => {
    store.setState({ count: 20 }, 'any')
    expect(store.state).toEqual({ count: 20 })
    store.setState({ nz: 30 }, 'any')
    expect(store.state).toEqual({ count: 20, nz: 30 })
  })
  it('can override state', () => {
    expect(store.state).toEqual({ count: 20, nz: 30 })
    store.__overrideState__({ name: 'new' }, 'any')
    expect(store.state).toEqual({ name: 'new' })
  })
  it('can dispatch action', () => {
    store.use(
      { count: 10 },
      {
        up: ({ state, payload }: { state: any; payload: any }) => ({ count: state.count + 1 })
      }
    )
    store.dispatch('up')
    expect(store.state).toEqual({ count: 11, name: 'new' })
  })
  it('stops calling listeners if unsubscribed', () => {
    const handler = store.on(fn2)
    store.dispatch('up')
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn2).toBeCalledWith({ count: 12, name: 'new' }, 'up')
    handler()
    store.dispatch('up')
    expect(fn2).toHaveBeenCalledTimes(1)
  })
  it('can dispatch action with payload', () => {
    store.use(
      {
        count: 10
      },
      {
        downBy: ({ state, payload }: { state: any; payload: any }) => ({ count: state.count - payload })
      }
    )
    store.dispatch('downBy', 5)
    expect(store.state).toEqual({ count: 5, name: 'new' })
  })
  it('can dispatch async actions', async () => {
    store.use(
      {},
      {
        fetch: ({ state, payload }: { state: any; payload: any }) => {
          return new Promise((resolve, reject) => {
            process.nextTick(() => {
              resolve({ name: 'async' })
            })
          })
        }
      }
    )
    store.dispatch('fetch')
    await sleep(1)
    expect(store.state).toEqual({ count: 5, name: 'async' })
  })
  it('wont dispatch unknown actions', () => {
    store.dispatch('unknown')
    expect(store.state).toEqual({ count: 5, name: 'async' })
  })
})
