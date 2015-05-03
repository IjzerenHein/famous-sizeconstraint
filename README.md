famous-sizeconstraint
==========

SizeConstraint makes it possible to set the following constraints on renderables:

|Option|Description|
|--------|-----------|
|```scale```|Scales the size proportionally to the parent-size (factor).|
|```padding```|Inner width/height padding (pixels).|
|```max```|Sets the maximum-size (pixels).|
|```min```|Sets the minimum-size (pixels).|
|```ratio```|Aspect ratio to enforce (factor).|
|```size```|Default size to use instead of the parent size (pixels).|

### Demos

- [Site demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/site/index.html) *(demonstrates maximum-width to create a site-layout with borders)*
- [Photo demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/photo/index.html) *(demonstrates aspect-ratio)*
- [Scale demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/scale/index.html) *(demonstrates scaling)*
- [Padding demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/padding/index.html) *(demonstrates padding)*

## Getting started

Install using bower or npm:

    bower install famous-sizeconstraint

    npm install famous-sizeconstraint

If necessary, add to the requirejs paths config:

```javascript
require.config({
    paths: {
        ...
        'famous-sizeconstraint': 'bower_components/famous-sizeconstraint/SizeConstraint',
        ...
    }
});
```

**Create a surface with a width 20px less than its parent:**

```javascript
var SizeConstraint = require('famous-sizeconstraint');

var sizeConstraint = new SizeConstraint({
	padding: [20, undefined]
});
this.add(sizeConstraint);
var surface = new Surface({ properties: { backgroundColor: 'blue' }});
sizeConstraint.add(surface);
```

**Create a surface which is 50% its parent size:**

*Note: this is different from Transform.scale, as it does not apply a scale-matrix, but it merely changes the size.*

```javascript
var sizeConstraint = new SizeConstraint({
	scale: [0.5, 0.5]
});
this.add(sizeConstraint);
var surface = new Surface({ properties: { backgroundColor: 'blue' }});
sizeConstraint.add(surface);
```

**Create a surface with a maximum-width of 400px, and a minimum-height of 100px:**

```javascript
var sizeConstraint = new SizeConstraint({
    max: [400, undefined],
    min: [undefined, 100]
});
this.add(sizeConstraint);
var surface = new Surface({ properties: { backgroundColor: 'blue' }});
sizeConstraint.add(surface);
```

**Create a surface with an aspect ratio of 4/3:**

```javascript
var sizeConstraint = new SizeConstraint({
    ratio: [4, 3]
});
this.add(sizeConstraint);
var surface = new Surface({ properties: { backgroundColor: 'blue' }});
sizeConstraint.add(surface);
```

## Documentation

* [API Reference](docs/SizeConstraint.md)

### Using multiple constraints

All of the constraints can be combined. When using multiple constraints, the
following execution order is in effect:

```size``` -> ```scale``` -> ```padding``` -> ```max``` -> ```min``` -> ```aspect-ratio```

## Contribute

Feel free to contribute to this project in any way. The easiest way to support this project is by giving it a star.

## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com (for hire)

© 2014 - Hein Rutjes
