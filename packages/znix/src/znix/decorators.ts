/**
 * @module Decorators
 */
/**
 * A Decorator to define a custom element
 * @param tag name of custom element's tag
 * @param clx class reference when not using as a decorator
 * @example
 *
 *     @Element('my-comp)
 *     class MyComp extends Component {...}
 *
 *     class MyComp extends Component {...}
 *     Element('my-comp', MyComp)
 */
function Element(tag: string, clx?: any): any {
  if (clx) return customElements.define(tag, clx);
  return (clazz: any) => customElements.define(tag, clazz);
}

export { Element };
