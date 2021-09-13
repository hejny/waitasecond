export function forAnimationFrame(): Promise<number> {
    return new Promise((resolve) => {
        requestAnimationFrame((now) => {
            // TODO: !!! What exactly is now?
            resolve(now);
        });
    });
}
