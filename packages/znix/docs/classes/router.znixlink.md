[@znix/znix](../README.md) > [Router](../modules/router.md) > [ZnixLink](../classes/router.znixlink.md)

# Class: ZnixLink

A super simple component to render route links with connection to Router

## Hierarchy

↳  [PureComponent](purecomponent.purecomponent-1.md)

**↳ ZnixLink**

## Index

### Properties

* [target](router.znixlink.md#target)
* [to](router.znixlink.md#to)

### Methods

* [handleClick](router.znixlink.md#handleclick)
* [render](router.znixlink.md#render)

---

## Properties

<a id="target"></a>

###  target

**● target**: *`string`* =  this.getAttribute('target')

The target attribute for , if passed as '\_blank', the router will skip normal resolution and let browser open the URL in new window/tab

___
<a id="to"></a>

###  to

**● to**: *`string`* =  this.getAttribute('to')

A destination URL

___

## Methods

<a id="handleclick"></a>

###  handleClick

▸ **handleClick**(event: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `any` |

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): `TemplateResult`

Render a wired a tag with handling for click events

**Returns:** `TemplateResult`

___

