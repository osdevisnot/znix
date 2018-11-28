/**
 * @module Routes
 */

/**
 * Regex to match the path parameters
 */
const parametersPattern = /(:[^\/]+)/g;

/**
 * This helper function identifies if a single route matches the targeted location.
 * In addition to identifying a match, it will extract the params from target when a match is found
 * @param route single route entry
 * @param pathname target location to match towards
 */
function matchRoute(route, pathname) {
  const match = new RegExp(route.path.replace(parametersPattern, '([^/]+)') + (route.exact ? '$' : '(/|$)'));
  const params = (route.path.match(parametersPattern) || []).map(x => x.substring(1));
  const matches = pathname.match(match);
  if (!matches) {
    return false;
  }
  return params.reduce((acc, param, idx) => {
    acc[param] = decodeURIComponent(matches[idx + 1]);
    return acc;
  }, {});
}

/**
 * Function to extract the query params from search part of URL
 * @param loc standard location object
 */
function search(loc) {
  return loc.search
    .replace(/^\?/, '')
    .split('&')
    .filter(param => param.length)
    .reduce((acc, part) => {
      const [key, value] = part.split('=');
      acc[decodeURIComponent(key)] = value ? decodeURIComponent(value) : null;
      return acc;
    }, {});
}

/**
 * Match the Route definition to Target. If matched, return the route definition with route params and query params
 * @param routes Routes Definition
 * @param loc Target Location
 */
function matchRoutes(routes, loc) {
  console.log(loc);
  let target = loc.pathname.replace(/[.*]+\/$/, ''),
    params;
  const route = routes.find(r => (params = matchRoute(r, target)));
  const query = search(loc);
  return { route, params, query };
}

export { matchRoutes };
