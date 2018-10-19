export class SquareBtn {
    constructor() {
        this.image = 'https://avatars2.githubusercontent.com/u/959059?s=100&v=4';
        this.clickTo = () => { };
        this.text = 'Click Me';
        this.handleClick = (event) => {
            this.clickTo(event);
            this.buttonClicked.emit(event);
        };
    }
    render() {
        return (h("div", { class: "btn-holder", onClick: (event) => this.handleClick(event) },
            h("div", { class: "square-btn" },
                h("div", { class: "square-btn-content" },
                    h("div", { class: "square-btn-icon" },
                        h("img", { src: this.image, alt: "Button Image" })),
                    h("div", { class: "square-btn-text" }, this.text)),
                h("div", { class: "square-btn-shadow" }))));
    }
    static get is() { return "square-btn"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get events() { return [{
            "name": "buttonClicked",
            "method": "buttonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:square-btn:**/"; }
}
