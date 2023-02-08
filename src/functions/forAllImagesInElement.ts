// tslint:disable:no-console

export function forAllImagesInElement(element: HTMLElement): Promise<void> {
    return Promise.all<void>(
        Array.from(element.querySelectorAll('img')).map(
            (imageElement /*, i*/) => {
              
                // TODO: BEFORE ANY CHANGE HERE forAllImagesInElement should be internally using forImage

                return new Promise((resolve, reject) => {
                    if (imageElement.complete) {
                        if (imageElement.naturalHeight === 0) {
                            /*
                            TODO: [0]
                            console.info(
                                `Image ${i} rejected due to 0 naturalHeight`,
                            );
                            */

                            // TODO: Check this also in load
                            reject(imageElement);
                        } else {
                            // TODO: [0]> console.info(`Image ${i} is already completed`);
                            resolve();
                        }
                    }

                    imageElement.addEventListener('load', () => {
                        // TODO: [0]> console.info(`Image ${i} resolved`);
                        resolve();
                    });
                    imageElement.addEventListener('error', () => {
                        // TODO: [0]> console.info(`Image ${i} rejected`);
                        reject(new Error(`Some images can\`t be loaded.`));
                    });
                });
            },
        ),
    ).then(() => {
        /* Note: Returning void */
    });
}

/**
 * TODO: forAllImagesInElement should be internally using forImage
 * TODO: forAllImagesInElement should be able to recieve just an <img> element
 * TODO: Rename to forImagesReady OR forMediaReady
 * TODO: Timeout by chaining
 * TODO: rejectWhenNotLoaded by chaining
 * TODO: Corrupted images into samples
 * TODO: Also with media and pictures
 * TODO: Universal for every loadable think
 * TODO: Also start new wait when  new images appears / disappears during the wait
 * TODO: [0] Verbose mode for logging
 * TODO: Make special error - ImageError and put imgElement as extra data of ImageError
*/
