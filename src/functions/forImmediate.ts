export function forImmediate(): Promise<void> {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            resolve();
        });
    });
}
