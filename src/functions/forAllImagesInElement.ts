/*
TODO: !!! Rename forImagesReady, forMediaReady
TODO: !!! Timeout by chaining
TODO: !!! rejectWhenNotLoaded by chaining
TODO: !!! Corrupted images into samples
TODO: !!! Also with media and pictures
TODO: !!! Universal for every loadable think
TODO: Verbose mode for console.info
*/

// tslint:disable:no-console

export function forAllImagesInElement(element: HTMLElement): Promise<void> {
    return Promise.all<void>(
        Array.from(element.querySelectorAll('img')).map((imgElement, i) => {
            return new Promise((resolve, reject) => {
                if (imgElement.complete) {
                    if (imgElement.naturalHeight === 0) {
                        console.info(
                            `Image ${i} rejected due to 0 naturalHeight`,
                        );

                        // TODO: !!! Check this also in load
                        reject(imgElement);
                    } else {
                        console.info(`Image ${i} is already completed`);
                        resolve();
                    }
                }

                imgElement.addEventListener('load', () => {
                    console.info(`Image ${i} resolved`);
                    resolve();
                });
                imgElement.addEventListener('error', () => {
                    console.info(`Image ${i} rejected`);
                    // TODO: !!! imgElement into ImageError
                    reject(
                        new Error(
                            `Some images can\`t be loaded. If you want to supress this error keep rejectWhenNotLoaded=false (default value).`,
                        ),
                    );
                });
            });
        }),
    ).then(() => {
        /* Note: Returning void */
    });
}
