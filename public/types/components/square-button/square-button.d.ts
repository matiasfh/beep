import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class SquareBtn {
    image: string;
    clickTo: Function;
    text: string;
    buttonClicked: EventEmitter;
    handleClick: (event: UIEvent) => void;
    render(): JSX.Element;
}
