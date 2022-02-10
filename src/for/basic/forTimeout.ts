export function forTimeout(miliseconds: number): Promise<void> {
    if (miliseconds < 0) {
        throw new Error(
            `forTimeout: Miliseconds to wait must be positive number`,
        );
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}
