/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*jslint browser:true, nomen:true, vars:true, plusplus:true, bitwise: true*/
/*global define*/

define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var SizeConstraint = require('famous-sizeconstraint');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Transform = require('famous/core/Transform');

    // create the main context
    var mainContext = Engine.createContext();

    // create modifiers & surface
    var back = new Surface({
        classes: ['back']
    });
    mainContext.add(back);

    var modifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    });
    var sizeConstraint = new SizeConstraint({
        max: [600, 400],
        ratio: [4, 3]
    });
    var frame = new Surface({
        classes: ['photo-frame']
    });
    mainContext.add(modifier).add(sizeConstraint);
    sizeConstraint.add(frame);
    var photoModifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        transform: Transform.scale(0.85, 0.8, 1)
    });
    var photo = new ImageSurface({
        classes: ['photo-content'],
        content: 'photo.jpg'
    });
    sizeConstraint.add(photoModifier).add(photo);
});
