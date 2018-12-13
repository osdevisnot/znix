import { matchRoutes, routeMatcher, search } from '../src/routes'

describe('routes', () => {
  let routes: any, mocks: any
  beforeEach(() => {
    mocks = {
      home: jest.fn(),
      profile: jest.fn(),
      profileId: jest.fn()
    }
    routes = [
      { path: '/home', render: mocks.home },
      { path: '/profile', render: mocks.profile, exact: true },
      { path: '/profile/:id', render: mocks.profileId }
    ]
  })
  it('exports are defined', () => {
    expect(search).toBeDefined()
    expect(routeMatcher).toBeDefined()
    expect(matchRoutes).toBeDefined()
  })
  describe('.search()', () => {
    it('returns empty object when no query params', () => {
      const ret = search('')
      expect(ret).toEqual({})
    })
    it('returns query params for single query', () => {
      const ret = search('?abc=def')
      expect(ret).toEqual({ abc: 'def' })
    })
    it('returns query params for multiple query params', () => {
      const ret = search('?abc=def&hl=10')
      expect(ret).toEqual({ abc: 'def', hl: '10' })
    })
    it('returns null value for query params without values', () => {
      const ret = search('?abc&hl=10')
      expect(ret).toEqual({ abc: null, hl: '10' })
    })
  })
  describe('.routeMatcher()', () => {
    it('can find matched path', () => {
      const ret = routeMatcher(routes[0], '/home')
      expect(ret).toBeTruthy()
    })
    it('can find params from matched path', () => {
      const ret = routeMatcher(routes[2], '/profile/1234')
      expect(ret).toBeTruthy()
      expect(ret).toEqual({
        id: '1234'
      })
    })
    it('wont match incorrect paths', () => {
      const badPaths = ['/about', '/profiles', '/']
      badPaths.forEach(path => {
        routes.forEach((route: any) => {
          const ret = routeMatcher(route, path)
          expect(ret).toBeFalsy()
        })
      })
    })
  })
  describe('.matchRoutes()', () => {
    it('finds simple match', () => {
      const location: any = {
        pathname: '/home'
      }
      const ret = matchRoutes(routes, location)
      expect(ret).toBeDefined()
      expect(ret).toEqual({ route: routes[0], query: {}, params: {} })
    })
    it('finds match with exact', () => {
      const location: any = {
        pathname: '/profile'
      }
      const ret = matchRoutes(routes, location)
      expect(ret).toBeDefined()
      expect(ret).toEqual({ route: routes[1], query: {}, params: {} })
    })
    it('finds correct params and queries', () => {
      const location: any = {
        pathname: '/profile/1234',
        search: '?abc=def'
      }
      const ret = matchRoutes(routes, location)
      expect(ret).toBeDefined()
      expect(ret).toEqual({
        route: routes[2],
        query: { abc: 'def' },
        params: { id: '1234' }
      })
    })
    it('wont match bad paths', () => {
      const locations = [
        { pathname: '/' },
        { pathname: '/', search: '' },
        { pathname: 'home' }, // missing first slash
        { pathname: '/homey' } // bad spelling
      ]
      locations.forEach((location: any) => {
        const ret = matchRoutes(routes, location)
        expect(ret).toEqual({ route: undefined, query: {}, params: {} })
      })
    })
  })
})
