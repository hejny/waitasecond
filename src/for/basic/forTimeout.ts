export function forTimeout(miliseconds: number): Promise<void> {
    if (miliseconds < 0) {
        throw new Error(`Miliseconds to wait must be greater than 0`);
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}
