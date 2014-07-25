<a name="module_SizeConstraint"></a>
#SizeConstraint
SizeConstraint makes it possible to set the following constraints on renderables:

|Option|Description|
|--------|-----------|
|```scale```|Scales the size proportionally to the parent-size.
|```min```|Sets the minimum-size.|
|```max```|Sets the maximum-size.|
|```ratio```|Aspect ratio to enforce.|
|```origin```|Origin to use (default: [0.5, 0.5]).|
|```align```|Align to use (default: [0.5, 0.5]).|

<a name="exp_module_SizeConstraint"></a>
##class: SizeConstraint ⏏
**Members**

* [class: SizeConstraint ⏏](#exp_module_SizeConstraint)
  * [new SizeConstraint(options)](#exp_new_module_SizeConstraint)
  * [sizeConstraint.add()](#module_SizeConstraint#add)
  * [sizeConstraint.getSize()](#module_SizeConstraint#getSize)
  * [sizeConstraint.setOptions(options)](#module_SizeConstraint#setOptions)
  * [sizeConstraint.calcSize(parentSize)](#module_SizeConstraint#calcSize)

<a name="exp_new_module_SizeConstraint"></a>
###new SizeConstraint(options)
**Params**

- options `Object` - Options.  
  - \[scale\] `Array.Number` | `function` - Scale  
  - \[min\] `Array.Number` | `function` - Minimum-size  
  - \[max\] `Array.Number` | `function` - Maximum-size  
  - \[ratio\] `Array.Number` | `function` - Aspect-ratio  
  - \[origin\] `Array.Number` | `function` - Origin to use (default: [0.5, 0.5])  
  - \[align\] `Array.Number` | `function` - Align to use (default: [0.5, 0.5])  

<a name="module_SizeConstraint#add"></a>
###sizeConstraint.add()
Add a child

<a name="module_SizeConstraint#getSize"></a>
###sizeConstraint.getSize()
Get the size

**Returns**: `Array.Number` - Size  
<a name="module_SizeConstraint#setOptions"></a>
###sizeConstraint.setOptions(options)
Patches the SizeConstraint instance's options with the passed-in ones.

**Params**

- options `Options` - An object of configurable options for the SizeConstraint instance.  

<a name="module_SizeConstraint#calcSize"></a>
###sizeConstraint.calcSize(parentSize)
Calculates the modified size based on the parent-size.

**Params**

- parentSize `Array.Number` - Size of the parent  

**Returns**: `Array.Number` - [width, height]  
