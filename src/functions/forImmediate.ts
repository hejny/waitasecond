import { forTime } from "./forTime";


export function forImmediate(): Promise<void> {
    return forTime(0);
}
