export function forAnimationFrame(): Promise<number> {
    return new Promise((resolve) => {
        requestAnimationFrame((now) => {
            resolve(now);
        });
    });
}
