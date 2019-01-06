[@znix/znix-monorepo](../README.md) > [PureComponent](../modules/purecomponent.md) > [PureComponent](../classes/purecomponent.purecomponent-1.md)

# Class: PureComponent

Base class for Znix Components

## Hierarchy

 `HTMLElement`

**↳ PureComponent**

↳  [Component](component.component-1.md)

## Index

### Constructors

* [constructor](purecomponent.purecomponent-1.md#constructor)

### Properties

* [__root__](purecomponent.purecomponent-1.md#__root__)
* [HTMLElement](purecomponent.purecomponent-1.md#htmlelement)

### Methods

* [$](purecomponent.purecomponent-1.md#_)
* [$$](purecomponent.purecomponent-1.md#__)
* [__flush__](purecomponent.purecomponent-1.md#__flush__)
* [attributeChangedCallback](purecomponent.purecomponent-1.md#attributechangedcallback)
* [connectedCallback](purecomponent.purecomponent-1.md#connectedcallback)
* [createRoot](purecomponent.purecomponent-1.md#createroot)
* [disconnectedCallback](purecomponent.purecomponent-1.md#disconnectedcallback)
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

<a id="__root__"></a>

###  __root__

**● __root__**: *`ShadowRoot`*

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

<a id="_"></a>

###  $

▸ **$**(selector: *`string`*):  `HTMLElement` &#124; `null`

Find an element in this ShadowRoot (alias for `querySelector`)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` |  the dom selector |

**Returns:**  `HTMLElement` &#124; `null`

___
<a id="__"></a>

###  $$

▸ **$$**(selector: *`string`*): `NodeListOf`<`HTMLElement`>

Returns an array of DOM elements for given selector (alias for `querySelectorAll`)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` |  the dom selector |

**Returns:** `NodeListOf`<`HTMLElement`>

___
<a id="__flush__"></a>

### `<Protected>` __flush__

▸ **__flush__**(options?: *[IRenderOptions](../modules/purecomponent.md#irenderoptions)*): `Promise`<`void`>

flush the render cache to DOM. This method should not be overridden in extended class

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [IRenderOptions](../modules/purecomponent.md#irenderoptions) |  additional options to pass to instance's render function |

**Returns:** `Promise`<`void`>

___
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
<a id="createroot"></a>

###  createRoot

▸ **createRoot**(): `ShadowRoot`

Create a Shadow DOM root node for current component. Override this method to change root behavior.

**Returns:** `ShadowRoot`

___
<a id="disconnectedcallback"></a>

###  disconnectedCallback

▸ **disconnectedCallback**(): `void`

Invoked each time the custom element is removed from DOM.

**Returns:** `void`

___
<a id="render"></a>

### `<Abstract>` render

▸ **render**(options?: *[IRenderOptions](../modules/purecomponent.md#irenderoptions)*): `TemplateResult`

The render method must be defined in the Component extending this base class. Skipping `render` definition would render a no op for a custom element.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IRenderOptions](../modules/purecomponent.md#irenderoptions) |

**Returns:** `TemplateResult`

___

