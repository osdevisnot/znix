[@znix/znix-monorepo](../README.md) > [Routes](../modules/routes.md)

# External module: Routes

## Index

### Type aliases

* [IRoute](routes.md#iroute)
* [IRouteParams](routes.md#irouteparams)

### Variables

* [parametersPattern](routes.md#parameterspattern)

### Functions

* [matchRoutes](routes.md#matchroutes)
* [routeMatcher](routes.md#routematcher)
* [search](routes.md#search)

---

## Type aliases

<a id="iroute"></a>

###  IRoute

**Ƭ IRoute**: *`object`*

#### Type declaration

`Optional`  exact:  `undefined` &#124; `false` &#124; `true`

 path: `string`

 render : function
▸ **render**(options?: *[IRenderOptions](purecomponent.md#irenderoptions)*): `TemplateResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IRenderOptions](purecomponent.md#irenderoptions) |

**Returns:** `TemplateResult`

___
<a id="irouteparams"></a>

###  IRouteParams

**Ƭ IRouteParams**: *`object`*

#### Type declaration

[index: `string`]: `any`

___

## Variables

<a id="parameterspattern"></a>

### `<Const>` parametersPattern

**● parametersPattern**: *`RegExp`* =  /(:[^\/]+)/g

Regex to match the path parameters

___

## Functions

<a id="matchroutes"></a>

###  matchRoutes

▸ **matchRoutes**(routes: *[[IRoute](routes.md#iroute)]*, loc: *`Location`*): `object`

Match the Route definition to Target. If matched, return the route definition with route params and query params

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| routes | [[IRoute](routes.md#iroute)] |  Routes Definition |
| loc | `Location` |  Target Location |

**Returns:** `object`

___
<a id="routematcher"></a>

###  routeMatcher

▸ **routeMatcher**(route: *[IRoute](routes.md#iroute)*, pathname: *`string`*): `any`

This helper function identifies if a single route matches the targeted location. In addition to identifying a match, it will extract the params from target when a match is found

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| route | [IRoute](routes.md#iroute) |  single route entry |
| pathname | `string` |  target location to match towards |

**Returns:** `any`

___
<a id="search"></a>

###  search

▸ **search**(search: *`string`*): `object`

Function to extract the query params from search part of URL

**Parameters:**

| Name | Type |
| ------ | ------ |
| search | `string` |

**Returns:** `object`

___

