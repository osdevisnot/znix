[@znix/znix-monorepo](../README.md) > [store](../modules/store.md)

# External module: store

## Index

### Variables

* [_actions](store.md#_actions)
* [_listeners](store.md#_listeners)
* [_state](store.md#_state)

### Functions

* [emit](store.md#emit)

### Object literals

* [store](store.md#store-1)

---

## Variables

<a id="_actions"></a>

### `<Let>` _actions

**● _actions**: *`object`*

#### Type declaration

___
<a id="_listeners"></a>

### `<Let>` _listeners

**● _listeners**: *`any`[]* =  []

___
<a id="_state"></a>

### `<Let>` _state

**● _state**: *`object`*

#### Type declaration

___

## Functions

<a id="emit"></a>

###  emit

▸ **emit**(state: *`any`*, action: *`any`*): `void`

emit an event @internal

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  Current store state |
| action | `any` |  name of action |

**Returns:** `void`

___

## Object literals

<a id="store-1"></a>

### `<Const>` store

**store**: *`object`*

Super simple pub/sub, event emitter for Znix applications

<a id="store-1._override"></a>

####  _override

▸ **_override**(state: *`any`*, action: *`any`*): `void`

Override current state value (useful for devtools)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  updated state |
| action | `any` |  action triggering state update |

**Returns:** `void`

___
<a id="store-1.dispatch"></a>

####  dispatch

▸ **dispatch**(action: *`any`*, payload?: *`any`*): `any`

Dispatch an action with given payload. If action returns promise, dispatch will resolve after promise resolution. Same for async calls...

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| action | `any` |  action name |
| `Optional` payload | `any` |  data for action |

**Returns:** `any`

___
<a id="store-1.off"></a>

####  off

▸ **off**(handler: *`any`*): `void`

Unsubscribe from store updates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| handler | `any` |  an event handler |

**Returns:** `void`

___
<a id="store-1.on"></a>

####  on

▸ **on**(handler: *`any`*): `any`

Subscribe to store updates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| handler | `any` |  an event handler |

**Returns:** `any`

___
<a id="store-1.register"></a>

####  register

▸ **register**(state: *`any`*, actions?: *`any`*): `void`

Register initial state and actions with store

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  initial state |
| `Optional` actions | `any` |  list of actions |

**Returns:** `void`

___
<a id="store-1.setstate"></a>

####  setState

▸ **setState**(state: *`any`*, action: *`any`*): `void`

Set state and call store listeners

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  updated state |
| action | `any` |  action triggering state update |

**Returns:** `void`

___
<a id="store-1.state"></a>

####  state

getstate(): `object`

Get Current State from store

**Returns:** `object`

___

___

