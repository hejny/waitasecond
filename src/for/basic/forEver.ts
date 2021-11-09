/**
 *
 * @returns never resolved or rejected promise
 */
export function forEver(): Promise<never> {
    return new Promise(() => {
        // Note: Never ever resolved
    });
}
