export function forTime(miliseconds: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
}
