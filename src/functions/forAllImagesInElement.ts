export async function forAllImagesInElement(
    element: HTMLElement,
    rejectWhenNotLoaded = false,
    timeout = 1500,
): Promise<void> {
    try {
        await Promise.all(
            // TODO: How to handle console.info
            Array.from(element.querySelectorAll('img')).map((imgElement) => {
                return new Promise((resolve, reject) => {
                    if (imgElement.complete) {
                        if (imgElement.naturalHeight === 0) {
                            // console.info(`Image ${i} rejected due to 0 naturalHeight`);
                            reject(imgElement);
                        } else {
                            // console.info(`Image ${i} resolved`);
                            resolve();
                        }
                    }

                    imgElement.addEventListener('load', () => {
                        // console.info(`Image ${i} resolved`);
                        resolve();
                    });
                    imgElement.addEventListener('error', () => {
                        // console.info(`Image ${i} rejected`);
                        reject(imgElement);
                    });

                    setTimeout(() => {
                        // console.info(`Image ${i} rejected due to timeout`);
                        reject(imgElement);
                    }, timeout);
                });
            }),
        );
    } catch (error) {
        if (rejectWhenNotLoaded) {
            throw new Error(
                `Some images can\`t be loaded. If you want to supress this error keep rejectWhenNotLoaded=false (default value).`,
            );
        } else {
            return;
        }
    }
    // This return will be reached only when there will be all promises resolved and there will be no error
    return;
}