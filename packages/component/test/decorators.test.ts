import { Element } from '../src/decorators'

describe('decorators', () => {
  describe('Element', () => {
    let mock: any
    beforeEach(() => {
      mock = jest.fn()
    })
    it('is defined', () => {
      expect(Element).toBeDefined()
    })
    it('correctly annotates when used as fn', () => {
      ;(global as any).customElements = { define: mock }
      class MyTag {}
      Element('my-tag', MyTag)
      expect(mock).toHaveBeenCalledWith('my-tag', MyTag)
    })
    it('correctly annotates when used as decorator', () => {
      ;(global as any).customElements = { define: mock }
      @Element('my-tag')
      class MyTag {}
      expect(mock).toHaveBeenCalledWith('my-tag', MyTag)
    })
  })
})
