/*! Built with http://stenciljs.com */
import { h } from '../motherboard.core.js';
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.format = function () {
        return ((this.first || '') +
            (this.middle ? " " + this.middle : '') +
            (this.last ? " " + this.last : ''));
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.format());
    };
    Object.defineProperty(MyComponent, "is", {
        get: function () { return "my-component"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "properties", {
        get: function () {
            return {
                "first": {
                    "type": String,
                    "attr": "first"
                },
                "last": {
                    "type": String,
                    "attr": "last"
                },
                "middle": {
                    "type": String,
                    "attr": "middle"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent };
