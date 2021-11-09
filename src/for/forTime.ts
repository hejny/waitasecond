export function forTime(miliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}
