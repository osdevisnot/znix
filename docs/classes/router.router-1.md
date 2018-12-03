[@znix/znix-monorepo](../README.md) > [Router](../modules/router.md) > [Router](../classes/router.router-1.md)

# Class: Router

Super Simple Router for Znix Applications

## Hierarchy

 `PureComponent`

**↳ Router**

## Index

### Methods

* [connectedCallback](router.router-1.md#connectedcallback)
* [disconnectedCallback](router.router-1.md#disconnectedcallback)
* [render](router.router-1.md#render)
* [routes](router.router-1.md#routes)

---

## Methods

<a id="connectedcallback"></a>

###  connectedCallback

▸ **connectedCallback**(): `void`

Router's connectedCallback will subscribe to pushstate events in addition to calling render on component

**Returns:** `void`

___
<a id="disconnectedcallback"></a>

###  disconnectedCallback

▸ **disconnectedCallback**(): `void`

Unsubscribe from pushstate events

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(options?: *[IRenderOptions](../modules/purecomponent.md#irenderoptions)*): `TemplateResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IRenderOptions](../modules/purecomponent.md#irenderoptions) |

**Returns:** `TemplateResult`

___
<a id="routes"></a>

### `<Abstract>` routes

▸ **routes**(): `any`

Dynamic definition of routes

**Returns:** `any`

___

