export function forEver(): Promise<never> {
    return new Promise(() => {
        // Note: Never ever resolved 
    });
}
