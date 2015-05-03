<a name="module_SizeConstraint"></a>
## SizeConstraint
SizeConstraint makes it possible to set the following constraints on renderables:

|Option|Description|
|--------|-----------|
|```scale```|Scales the size proportionally to the parent-size (factor).|
|```padding```|Inner width/height padding (pixels).|
|```max```|Sets the maximum-size (pixels).|
|```min```|Sets the minimum-size (pixels).|
|```ratio```|Aspect ratio to enforce (factor).|
|```size```|Default size to use instead of parent-size (pixels).|


* [SizeConstraint](#module_SizeConstraint)
  * [SizeConstraint](#exp_module_SizeConstraint--SizeConstraint) ⏏
    * [new SizeConstraint(options)](#new_module_SizeConstraint--SizeConstraint_new)
    * [.add()](#module_SizeConstraint--SizeConstraint#add)
    * [.getSize()](#module_SizeConstraint--SizeConstraint#getSize) ⇒ <code>Array.Number</code>
    * [.setOptions(options)](#module_SizeConstraint--SizeConstraint#setOptions)
    * [.calcSize(parentSize)](#module_SizeConstraint--SizeConstraint#calcSize) ⇒ <code>Array.Number</code>

<a name="exp_module_SizeConstraint--SizeConstraint"></a>
### SizeConstraint ⏏
**Kind**: Exported class  
<a name="new_module_SizeConstraint--SizeConstraint_new"></a>
#### new SizeConstraint(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options. |
| [options.scale] | <code>Array.Number</code> &#124; <code>function</code> | Scale |
| [options.padding] | <code>Array.Number</code> &#124; <code>function</code> | Width/height padding |
| [options.max] | <code>Array.Number</code> &#124; <code>function</code> | Maximum-size |
| [options.min] | <code>Array.Number</code> &#124; <code>function</code> | Minimum-size |
| [options.ratio] | <code>Array.Number</code> &#124; <code>function</code> | Aspect-ratio |
| [options.size] | <code>Array.Number</code> &#124; <code>function</code> | Default size |

<a name="module_SizeConstraint--SizeConstraint#add"></a>
#### sizeConstraint.add()
Add a child

**Kind**: instance method of <code>[SizeConstraint](#exp_module_SizeConstraint--SizeConstraint)</code>  
<a name="module_SizeConstraint--SizeConstraint#getSize"></a>
#### sizeConstraint.getSize() ⇒ <code>Array.Number</code>
Get the size

**Kind**: instance method of <code>[SizeConstraint](#exp_module_SizeConstraint--SizeConstraint)</code>  
**Returns**: <code>Array.Number</code> - Size  
<a name="module_SizeConstraint--SizeConstraint#setOptions"></a>
#### sizeConstraint.setOptions(options)
Patches the SizeConstraint instance's options with the passed-in ones.

**Kind**: instance method of <code>[SizeConstraint](#exp_module_SizeConstraint--SizeConstraint)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Options</code> | An object of configurable options for the SizeConstraint instance. |

<a name="module_SizeConstraint--SizeConstraint#calcSize"></a>
#### sizeConstraint.calcSize(parentSize) ⇒ <code>Array.Number</code>
Calculates the modified size based on the parent-size.

**Kind**: instance method of <code>[SizeConstraint](#exp_module_SizeConstraint--SizeConstraint)</code>  
**Returns**: <code>Array.Number</code> - [width, height]  

| Param | Type | Description |
| --- | --- | --- |
| parentSize | <code>Array.Number</code> | Size of the parent |

