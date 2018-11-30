import { getOrigin, isExternal } from '../src/utils';

describe('utils', () => {
  describe('.getOrigin()', () => {
    it('returns fully formed url', () => {
      const loc = {
        protocol: 'http:',
        hostname: 'localhost'
      };
      const origin = getOrigin(loc);
      expect(origin).toBeDefined();
      expect(origin).toEqual('http://localhost');
    });
    it('identifies and joins ports', () => {
      const loc = {
        protocol: 'https:',
        hostname: 'abc.com',
        port: 441
      };
      const origin = getOrigin(loc);
      expect(origin).toBeDefined();
      expect(origin).toEqual('https://abc.com:441');
    });
  });
  describe('.isExternal()', () => {
    it('identifies internal links', () => {
      (global as any).location = {
        protocol: 'https:',
        hostname: 'abc.com',
        port: 441
      };
      const link = {
        protocol: 'https:',
        hostname: 'abc.com',
        port: 441
      };
      const match = isExternal(link);
      expect(match).toBeFalsy();
    });
    it('identifies external links', () => {
      (global as any).location = {
        protocol: 'https:',
        hostname: 'abc.com',
        port: 441
      };
      const links = [
        // https is not same as http
        { protocol: 'http:', hostname: 'abc.com', port: 441 },
        // different host
        { protocol: 'https:', hostname: 'def.com', port: 441 },
        // different port
        { protocol: 'https:', hostname: 'abc.com', port: 8080 }
      ];
      links.forEach(link => {
        const match = isExternal(link);
        expect(match).toBeTruthy();
      });
    });
  });
});
