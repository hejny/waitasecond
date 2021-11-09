import { forTime } from './forTime.js';

export function forImmediate(): Promise<void> {
    // Note: Not using setImmediate because it is non-standard feature only in browser window
    //       @see https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate

    return forTime(0);
}
