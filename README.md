famous-sizeconstraint
==========

SizeConstraint makes it possible to set the following constraints on renderables:

|Option|Description|
|--------|-----------|
|```scale```|Scales the size proportionally to the parent-size.
|```min```|Sets the minimum-size.|
|```max```|Sets the maximum-size.|
|```ratio```|Aspect ratio to enforce.|

### Demos

- [Site demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/site/index.html) *(demonstrates maximum-width to create a site-layout with borders)*
- [Photo demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/photo/index.html) *(demonstrates aspect-ratio)*
- [Scale demo](https://rawgit.com/IjzerenHein/famous-sizeconstraint/master/examples/scale/index.html) *(demonstrates scaling)*

## Getting started

Install using bower:

	bower install famous-sizeconstraint

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

**Create a surface with a maximum-width of 400px, and a minimum-height of 100px:**

```javascript
var SizeConstraint = require('famous-sizeconstraint');

var sizeConstraint = new SizeConstraint({
    max: [400, undefined],
    min: [undefined, 100]
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

## Contribute

Feel free to contribute to this project in any way. The easiest way to support this project is by giving it a star.

## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com

© 2014 - Hein Rutjes
