
// motherboard: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './motherboard.core.js';
import {
  MyComponent,
  SquareBtn
} from './motherboard.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    MyComponent,
    SquareBtn
  ], opts);
}
