import { forAnimationFrame } from './forAnimationFrame';

export async function forValueDefined<T>(
    getValue: () => T | undefined,
    waiter: () => Promise<void> = async () => {
        await forAnimationFrame();
    },
    limit: number = 1000,
): Promise<T> {
    for (let i = 0; i < limit; i++) {
        const value = getValue();
        if (typeof value !== 'undefined') {
            return value;
        }
        await waiter();
    }
    throw new Error(`Limit ${limit} overflowed in waitForDefined.`);
}
