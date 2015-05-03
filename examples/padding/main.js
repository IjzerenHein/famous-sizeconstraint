/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

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
