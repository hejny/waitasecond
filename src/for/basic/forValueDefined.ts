import { AsyncOrSync } from 'ts-essentials';

// TODO: !!! Options style in func params everywhere
export async function forValueDefined<T>(
    getValue: () => AsyncOrSync<T | undefined | null>,
    waiter: () => Promise<void> = async () => {
        await forTimeout(10);
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

/**
 * TODO: !!! Use type-fest
 */
