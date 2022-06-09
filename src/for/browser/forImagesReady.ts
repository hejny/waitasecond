// tslint:disable:no-console

// TODO: !!! Verbose in IForImagesReadyOptions

export function forImagesReady(element: HTMLElement): Promise<void> {
    return Promise.all<void>(
        Array.from(element.querySelectorAll('img')).map(
            (imageElement /*, i*/) => {
                // !!!!! BEFORE ANY CHANGE HERE> TODO: forAllImagesInElement should be internally using forImage

                return new Promise((resolve, reject) => {
                    if (imageElement.complete) {
                        if (imageElement.naturalHeight === 0) {
                            /*
                        console.info(
                            `Image ${i} rejected due to 0 naturalHeight`,
                        );
                        */

                            // TODO: !!! Check this also in load
                            reject(imageElement);
                        } else {
                            // console.info(`Image ${i} is already completed`);
                            resolve();
                        }
                    }

                    imageElement.addEventListener('load', () => {
                        // console.info(`Image ${i} resolved`);
                        resolve();
                    });
                    imageElement.addEventListener('error', () => {
                        // console.info(`Image ${i} rejected`);
                        // TODO: !!! imgElement into ImageError
                        reject(new Error(`Some images can\`t be loaded.`));
                    });
                });
            },
        ),
    ).then(() => {
        /* Note: Returning void */
    });
}

/*
TODO: Timeout by chaining
TODO: Corrupted images into samples
TODO: Also with media and pictures
TODO: Universal for every loadable think
TODO: Also start new wait when  new images appears / disappears during the wait
TODO: Verbose mode for console.info
*/
/**
 * TODO: forAllImagesInElement should be internally using forImage
 * TODO: forAllImagesInElement should be able to recieve an <img> element
 */
