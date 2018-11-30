[@znix/znix-monorepo](../README.md) > [Routes](../modules/routes.md)

# External module: Routes

## Index

### Variables

* [parametersPattern](routes.md#parameterspattern)

### Functions

* [matchRoutes](routes.md#matchroutes)
* [routeMatcher](routes.md#routematcher)
* [search](routes.md#search)

---

## Variables

<a id="parameterspattern"></a>

### `<Const>` parametersPattern

**● parametersPattern**: *`RegExp`* =  /(:[^\/]+)/g

Regex to match the path parameters

___

## Functions

<a id="matchroutes"></a>

###  matchRoutes

▸ **matchRoutes**(routes: *`any`*, loc: *`any`*): `object`

Match the Route definition to Target. If matched, return the route definition with route params and query params

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| routes | `any` |  Routes Definition |
| loc | `any` |  Target Location |

**Returns:** `object`

___
<a id="routematcher"></a>

###  routeMatcher

▸ **routeMatcher**(route: *`any`*, pathname: *`any`*): `any`

This helper function identifies if a single route matches the targeted location. In addition to identifying a match, it will extract the params from target when a match is found

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| route | `any` |  single route entry |
| pathname | `any` |  target location to match towards |

**Returns:** `any`

___
<a id="search"></a>

###  search

▸ **search**(search: *`any`*): `any`

Function to extract the query params from search part of URL

**Parameters:**

| Name | Type |
| ------ | ------ |
| search | `any` |

**Returns:** `any`

___

