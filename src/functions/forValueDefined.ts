import { forAnimationFrame } from './forAnimationFrame';

type IAwaitable<T> = T | Promise<T>;

export async function forValueDefined<T>(
    getValue: () => IAwaitable<T | undefined | null>,
    waiter: () => Promise<void> = async () => {
        await forAnimationFrame();
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
