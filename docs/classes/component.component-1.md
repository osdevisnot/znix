[@znix/znix-monorepo](../README.md) > [Component](../modules/component.md) > [Component](../classes/component.component-1.md)

# Class: Component

Connected Component for Znix Applications

## Hierarchy

↳  [PureComponent](purecomponent.purecomponent-1.md)

**↳ Component**

## Index

### Methods

* [$c](component.component-1.md#_c)
* [connectedCallback](component.component-1.md#connectedcallback)
* [disconnectedCallback](component.component-1.md#disconnectedcallback)

---

## Methods

<a id="_c"></a>

###  $c

▸ **$c**(): `Promise`<`void`>

Invoked each time the state in store changes.

**Returns:** `Promise`<`void`>

___
<a id="connectedcallback"></a>

###  connectedCallback

▸ **connectedCallback**(): `void`

Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

**Returns:** `void`

___
<a id="disconnectedcallback"></a>

###  disconnectedCallback

▸ **disconnectedCallback**(): `void`

Invoked each time the custom element is disconnected from the document's DOM.

**Returns:** `void`

___

