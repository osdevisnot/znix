[@znix/znix](../README.md) > [Decorators](../modules/decorators.md)

# External module: Decorators

## Index

### Functions

* [Element](decorators.md#element)

---

## Functions

<a id="element"></a>

###  Element

▸ **Element**(tag: *`any`*, clx?: *`any`*):  `void` &#124; `(Anonymous function)`

A Decorator to define a custom element
*__example__*: ```
@Element('my-comp)
class MyComp extends Component {...}

class MyComp extends Component {...}
Element('my-comp', MyComp)
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tag | `any` |  name of custom element's tag |
| `Optional` clx | `any` |  class reference when not using as a decorator |

**Returns:**  `void` &#124; `(Anonymous function)`

___

