import { forTime } from './forTime.js';

export async function forTimeout<T>(
    timeout: number,
    value: Promise<T>,
): Promise<T> {
    return await Promise.race([
        value,
        (async () => {
            await forTime(timeout);
            throw new Error(`Timeout ${timeout}ms is up.`);
        })(),
    ]);
}

/*
Note: Possible alternative way:

interface IForTimeoutOptions<T> {
    timeout: number;
    value: Promise<T>;
}

async function forTimeout<T>(
    options: IForTimeoutOptions<T>,
): Promise<T> {
    return await Promise.race([
        options.value,
        (async () => {
            await forTime(options.timeout);
            throw new Error(`Timeout ${options.timeout}ms is up.`);
        })(),
    ]);
}
*/
