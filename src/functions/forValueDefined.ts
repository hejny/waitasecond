import { forTime } from './forTime.js';

type IAwaitable<T> = T | Promise<T>;

export async function forValueDefined<T>(
    getValue: () => IAwaitable<T | undefined | null>,
    waiter: () => Promise<void> = async () => {
        await forTime(10);
    },
    limit: number = 1000,
): Promise<T> {
    for (let i = 0; i < limit; i++) {
        const value = await getValue();
        if (value !== undefined && value !== null) {
            return value;
        }
        await waiter();
    }
    throw new Error(`Limit ${limit} overflowed in waitForDefined.`);
}
