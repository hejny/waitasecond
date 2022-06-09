export function forImage(imageElement: HTMLImageElement): Promise<void> {
    return new Promise((resolve, reject) => {
        if (imageElement.complete) {
            if (imageElement.naturalHeight === 0) {
                reject(imageElement);
            } else {
                resolve();
            }
        }

        imageElement.addEventListener('load', () => {
            resolve();
        });
        imageElement.addEventListener('error', () => {
            reject(new Error(`Image "${imageElement.src}" can not be loaded.`));
        });
    });
}
