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

    // create the main context
    var mainContext = Engine.createContext();

    // create surface
    var modifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    });
    var back = new Surface({
        classes: ['back']
    });
    mainContext.add(back);
    var renderNode = mainContext.add(modifier);

    // Add scaling constraints
    function _add(padding) {
        var sizeConstraint = new SizeConstraint({
            padding: padding
        });
        var content = new Surface({
            classes: ['content'],
            content: 'padding: ' + JSON.stringify(padding)
        });
        renderNode.add(sizeConstraint);
        sizeConstraint.add(content);
    }
    _add([20, 20]);
    _add([undefined, 200]);
    _add([400, undefined]);
});
