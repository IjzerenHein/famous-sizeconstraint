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
    mainContext.add(back);
    var renderNode = mainContext.add(modifier);

    // Add scaling constraints
    function _add(scale) {
        var sizeConstraint = new SizeConstraint({
            scale: scale
        });
        var content = new Surface({
            classes: ['content'],
            content: 'scale: ' + JSON.stringify(scale)
        });
        renderNode.add(sizeConstraint);
        sizeConstraint.add(content);
    }
    _add([1.0, 1.0]);
    _add([0.5, 0.5]);
    _add([0.7, 0.2]);
});
