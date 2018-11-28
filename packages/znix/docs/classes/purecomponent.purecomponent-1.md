[@znix/znix](../README.md) > [PureComponent](../modules/purecomponent.md) > [PureComponent](../classes/purecomponent.purecomponent-1.md)

# Class: PureComponent

Base class for Znix Components

## Hierarchy

 `HTMLElement`

**↳ PureComponent**

↳  [Component](component.component-1.md)

↳  [Router](router.router-1.md)

↳  [ZnixLink](router.znixlink.md)

## Index

### Constructors

* [constructor](purecomponent.purecomponent-1.md#constructor)

### Properties

* [root](purecomponent.purecomponent-1.md#root)
* [HTMLElement](purecomponent.purecomponent-1.md#htmlelement)

### Methods

* [attributeChangedCallback](purecomponent.purecomponent-1.md#attributechangedcallback)
* [connectedCallback](purecomponent.purecomponent-1.md#connectedcallback)
* [flush](purecomponent.purecomponent-1.md#flush)
* [render](purecomponent.purecomponent-1.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PureComponent**(): [PureComponent](purecomponent.purecomponent-1.md)

Attaches a shadow root in 'open' mode.

**Returns:** [PureComponent](purecomponent.purecomponent-1.md)

___

## Properties

<a id="root"></a>

###  root

**● root**: *`ShadowRoot`*

The root node of Shadow DOM. Often referred as Shadow Root. Once the custom element is mounted, this can be accessed using `container.shadowRoot.querySelector('#selector')`

___
<a id="htmlelement"></a>

### `<Static>` HTMLElement

**● HTMLElement**: *`object`*

#### Type declaration

 constructor : function
⊕ **new __type**(): `HTMLElement`

**Returns:** `HTMLElement`

 prototype: `HTMLElement`

___

## Methods

<a id="attributechangedcallback"></a>

###  attributeChangedCallback

▸ **attributeChangedCallback**(): `void`

Invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get observedAttributes method

**Returns:** `void`

___
<a id="connectedcallback"></a>

###  connectedCallback

▸ **connectedCallback**(): `void`

Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

**Returns:** `void`

___
<a id="flush"></a>

###  flush

▸ **flush**(options?: *`any`*): `void`

flush the render cache to DOM. This method should not be overridden in extended class

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `any` |  additional options to pass to instance's render function |

**Returns:** `void`

___
<a id="render"></a>

### `<Abstract>` render

▸ **render**(options?: *`any`*): `any`

The render method must be defined in the Component extending this base class. Skipping `render` definition would render a no op for a custom element.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `any`

___

