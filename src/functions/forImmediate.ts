export function forImmediate(): Promise<void> {
    return new Promise((resolve) => {
        setImmediate(() => {
            resolve();
        });
    });
}
