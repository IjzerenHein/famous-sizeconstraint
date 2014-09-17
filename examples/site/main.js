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
    var sizeConstraint = new SizeConstraint({
        max: [600, undefined]
    });
    var content = new Surface({
        classes: ['content'],
        content: 'max-width: 600px'
    });
    mainContext.add(back);
    mainContext.add(modifier).add(sizeConstraint);
    sizeConstraint.add(content);
});
