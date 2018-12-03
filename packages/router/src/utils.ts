/**
 * Tiny Utility function to extract origin information from given location object
 * @param loc fully formed location object
 */
function getOrigin(loc: Location) {
  return loc.protocol + '//' + loc.hostname + (loc.port ? ':' + loc.port : '');
}

/**
 * Tiny Utility function to identify if the target URL is external to application
 * @param anchorElement the <a> link to target route
 */
function isExternal(anchorElement: Location) {
  // Location.origin and HTMLAnchorElement.origin are not
  // supported by IE and Safari.
  return getOrigin(location) !== getOrigin(anchorElement);
}

export { getOrigin, isExternal };
