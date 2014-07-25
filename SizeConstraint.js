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

/*global define*/

/**
 * SizeConstraint makes it possible to set the following constraints on renderables:
 *
 * |Option|Description|
 * |--------|-----------|
 * |```scale```|Scales the size proportionally to the parent-size.
 * |```min```|Sets the minimum-size.|
 * |```max```|Sets the maximum-size.|
 * |```ratio```|Aspect ratio to enforce.|
 * |```origin```|Origin to use (default: [0.5, 0.5]).|
 * |```align```|Align to use (default: [0.5, 0.5]).|
 *
 * @module
 */
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Entity = require('famous/core/Entity');
    var RenderNode = require('famous/core/RenderNode');
    var OptionsManager = require('famous/core/OptionsManager');

    /**
     * Supported constraints
     */
    var Constraints = {
        min: 'min',
        max: 'max',
        scale: 'scale',
        ratio: 'ratio'
    };

    /**
     * Updates the internal constraint value and getter-function
     */
    function _updateConstraints() {
        for (var constraint in Constraints) {
            if (this._constraints[constraint] === undefined) {
                this._constraints[constraint] = {};
            }
            this._constraints[constraint].getter = (this.options[constraint] instanceof Function) ? this.options[constraint] : null;
            this._constraints[constraint].value = this.options[constraint];
        }
    }

    /**
     * @class
     * @param {Object} options Options.
     * @param {Array.Number|Function} [options.scale] Scale
     * @param {Array.Number|Function} [options.min] Minimum-size
     * @param {Array.Number|Function} [options.max] Maximum-size
     * @param {Array.Number|Function} [options.ratio] Aspect-ratio
     * @param {Array.Number|Function} [options.origin] Origin to use (default: [0.5, 0.5])
     * @param {Array.Number|Function} [options.align] Align to use (default: [0.5, 0.5])
     * @alias module:SizeConstraint
     */
    function SizeConstraint(options) {
        this.options = Object.create(SizeConstraint.DEFAULT_OPTIONS);
        this._optionsManager = new OptionsManager(this.options);
        this._constraints = {};
        _updateConstraints.call(this);
        if (options) {
            this.setOptions(options);
        }

        this._entityId = Entity.register(this);

        this._node = new RenderNode();
    }

    SizeConstraint.DEFAULT_OPTIONS = {
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        scale: null,
        min: null,
        max: null,
        ratio: null
    };

    /**
     * Add a child
     */
    SizeConstraint.prototype.add = function add() {
        return this._node.add.apply(this._node, arguments);
    };

    /**
     * Get the size
     *
     * @return {Array.Number} Size
     */
    SizeConstraint.prototype.getSize = function getSize() {
        return this._node.getSize.apply(this._node, arguments);
    };

    /**
     * Patches the SizeConstraint instance's options with the passed-in ones.
     *
     * @param {Options} options An object of configurable options for the SizeConstraint instance.
     */
    SizeConstraint.prototype.setOptions = function setOptions(options) {
        var result = this._optionsManager.setOptions(options);
        _updateConstraints.call(this);
        return result;
    };

    /**
     * Calculates the modified size based on the parent-size.
     *
     * @param {Array.Number} parentSize Size of the parent
     * @return {Array.Number} [width, height]
     */
    SizeConstraint.prototype.calcSize = function(parentSize) {

        // Get options
        var scale = this._constraints.scale.getter ? this._constraints.scale.getter() : this._constraints.scale.value;
        var max = this._constraints.max.getter ? this._constraints.max.getter() : this._constraints.max.value;
        var min = this._constraints.min.getter ? this._constraints.min.getter() : this._constraints.min.value;
        var ratio = this._constraints.ratio.getter ? this._constraints.ratio.getter() : this._constraints.ratio.value;
        if (!scale && !max && !min && !ratio) {
            return null;
        }

        // init
        var size = [parentSize[0], parentSize[1]];

        // apply scale
        if (scale) {
            size[0] = size[0] * (scale[0] !== undefined) ? scale[0] : 1;
            size[1] = size[1] * (scale[1] !== undefined) ? scale[1] : 1;
        }

        // apply max
        if (max) {
            size[0] = Math.min(size[0], max[0] !== undefined ? max[0] : size[0]);
            size[1] = Math.min(size[1], max[1] !== undefined ? max[1] : size[1]);
        }

        // apply min
        if (min) {
            size[0] = Math.max(size[0], min[0] !== undefined ? min[0] : size[0]);
            size[1] = Math.max(size[1], min[1] !== undefined ? min[1] : size[1]);
        }

        // apply ratio
        if (ratio) {
            var ratioVal = ratio[0] / ratio[1];
            if (ratioVal < (size[0] / size[1])) {
                size[0] = size[1] * ratioVal;
            }
            else {
                size[1] = size[0] / ratioVal;
            }
        }
        return size;
    };

    /**
     * Generate a render spec from the contents of this component.
     *
     * @private
     * @method render
     * @return {Object} Render spec for this component
     */
    SizeConstraint.prototype.render = function render() {
        return this._entityId;
    };

    /**
     * @private
     * @ignore
     * @method commit
     * @param {Context} context commit context
     */
    SizeConstraint.prototype.commit = function(context) {
        return {
            align: this.options.align,
            origin: this.options.origin,
            size: this.calcSize(context.size),
            target: this._node.render()
        };
    };

    module.exports = SizeConstraint;
});
