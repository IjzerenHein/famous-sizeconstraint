/*
 * Copyright (c) 2014 Gloey Apps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
