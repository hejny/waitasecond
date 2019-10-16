export async function forAllImagesInElement(
    element: HTMLElement,
): Promise<void> {
    await Promise.all(
        Array.from(element.querySelectorAll('img')).map(
            (imgElement) => {
                return new Promise((resolve, reject) => {
                    if(imgElement.complete) {
                        if(imgElement.naturalHeight === 0) {
                            reject(imgElement);
                        } else {
                            resolve();
                        }

                        return;
                    };

                    imgElement.addEventListener('load', () => {
                        resolve();
                    });
                    imgElement.addEventListener('error', () => {
                        reject(imgElement);
                    });
                })
            }
        ),
    );
    return;
}
