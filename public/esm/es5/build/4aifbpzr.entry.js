/*! Built with http://stenciljs.com */
import { h } from '../motherboard.core.js';
var SquareBtn = /** @class */ (function () {
    function SquareBtn() {
        var _this = this;
        this.image = 'https://avatars2.githubusercontent.com/u/959059?s=100&v=4';
        this.clickTo = function () { };
        this.text = 'Click Me';
        this.handleClick = function (event) {
            _this.clickTo(event);
            _this.buttonClicked.emit(event);
        };
    }
    SquareBtn.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "btn-holder", onClick: function (event) { return _this.handleClick(event); } }, h("div", { class: "square-btn" }, h("div", { class: "square-btn-content" }, h("div", { class: "square-btn-icon" }, h("img", { src: this.image, alt: "Button Image" })), h("div", { class: "square-btn-text" }, this.text)), h("div", { class: "square-btn-shadow" }))));
    };
    Object.defineProperty(SquareBtn, "is", {
        get: function () { return "square-btn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquareBtn, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquareBtn, "properties", {
        get: function () {
            return {
                "clickTo": {
                    "type": "Any",
                    "attr": "click-to"
                },
                "image": {
                    "type": String,
                    "attr": "image"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquareBtn, "events", {
        get: function () {
            return [{
                    "name": "buttonClicked",
                    "method": "buttonClicked",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SquareBtn, "style", {
        get: function () { return ".buttons{position:relative;height:19vh;margin-top:7vh;margin-left:8%;width:84%;clear:both}.btn-holder{position:relative;float:left;width:45%}.btn-holder+.btn-holder{margin-left:10%}.square-btn{position:relative;width:100%;border-radius:5px;background-color:var(--beep-light);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.1);box-shadow:0 5px 15px 0 rgba(0,0,0,.1)}.square-btn:after{content:'';display:block;padding-bottom:100%}.square-btn-shadow{position:absolute;height:80%;width:80%;z-index:-1;top:25%;left:10%;border-radius:5px;background-color:rgba(0,0,0,.15);-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px)}.square-btn-content{position:absolute;width:100%;height:100%}.square-btn-icon{margin-bottom:10%;margin-top:15%;width:100%;height:35%}.square-btn-icon img{height:100%}.square-btn-text{width:100%;color:var(--beep-dark);font-size:15px;font-weight:300;letter-spacing:-.48px;line-height:22px}"; },
        enumerable: true,
        configurable: true
    });
    return SquareBtn;
}());
export { SquareBtn };
