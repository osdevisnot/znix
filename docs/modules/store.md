[@znix/znix-monorepo](../README.md) > [store](../modules/store.md)

# External module: store

## Index

### Type aliases

* [IActionHandler](store.md#iactionhandler)
* [IEventHandler](store.md#ieventhandler)

### Variables

* [_actions](store.md#_actions)
* [_listeners](store.md#_listeners)
* [_state](store.md#_state)

### Functions

* [emit](store.md#emit)

### Object literals

* [store](store.md#store-1)

---

## Type aliases

<a id="iactionhandler"></a>

###  IActionHandler

**Ƭ IActionHandler**: *`function`*

#### Type declaration
▸(state: *`any`*, payload?: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `any` |
| `Optional` payload | `any` |

**Returns:** `any`

___
<a id="ieventhandler"></a>

###  IEventHandler

**Ƭ IEventHandler**: *`function`*

#### Type declaration
▸(state: *`any`*, action: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `any` |
| action | `string` |

**Returns:** `void`

___

## Variables

<a id="_actions"></a>

### `<Let>` _actions

**● _actions**: *`Record`<`string`, [IActionHandler](store.md#iactionhandler)>*

___
<a id="_listeners"></a>

### `<Let>` _listeners

**● _listeners**: *`Array`<[IEventHandler](store.md#ieventhandler)>* =  []

___
<a id="_state"></a>

### `<Let>` _state

**● _state**: *`any`*

___

## Functions

<a id="emit"></a>

###  emit

▸ **emit**(state: *`any`*, action: *`string`*): `void`

emit an event @internal

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  Current store state |
| action | `string` |  name of action |

**Returns:** `void`

___

## Object literals

<a id="store-1"></a>

### `<Const>` store

**store**: *`object`*

Super simple pub/sub, event emitter for Znix applications

<a id="store-1._override"></a>

####  _override

▸ **_override**(state: *`any`*, action: *`string`*): `void`

Override current state value (useful for devtools)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  updated state |
| action | `string` |  action triggering state update |

**Returns:** `void`

___
<a id="store-1.dispatch"></a>

####  dispatch

▸ **dispatch**(action: *`string`*, payload?: *`any`*): `void`

Dispatch an action with given payload. If action returns promise, dispatch will resolve after promise resolution. Same for async calls...

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| action | `string` |  action name |
| `Optional` payload | `any` |  data for action |

**Returns:** `void`

___
<a id="store-1.off"></a>

####  off

▸ **off**(handler: *[IEventHandler](store.md#ieventhandler)*): `void`

Unsubscribe from store updates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| handler | [IEventHandler](store.md#ieventhandler) |  an event handler |

**Returns:** `void`

___
<a id="store-1.on"></a>

####  on

▸ **on**(handler: *[IEventHandler](store.md#ieventhandler)*): `Function`

Subscribe to store updates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| handler | [IEventHandler](store.md#ieventhandler) |  an event handler |

**Returns:** `Function`

___
<a id="store-1.register"></a>

####  register

▸ **register**(state: *`any`*, actions?: *`Record`<`string`, [IActionHandler](store.md#iactionhandler)>*): `void`

Register initial state and actions with store

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  initial state |
| `Optional` actions | `Record`<`string`, [IActionHandler](store.md#iactionhandler)> |  list of actions |

**Returns:** `void`

___
<a id="store-1.setstate"></a>

####  setState

▸ **setState**(state: *`any`*, action: *`string`*): `void`

Set state and call store listeners

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  updated state |
| action | `string` |  action triggering state update |

**Returns:** `void`

___
<a id="store-1.state"></a>

####  state

getstate(): `any`

Get Current State from store

**Returns:** `any`

___

___

