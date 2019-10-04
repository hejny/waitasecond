export async function forAllImagesInElement(
    element: HTMLElement,
): Promise<void> {
    await Promise.all(
        Array.from(element.querySelectorAll('img')).map(
            (imgElement) =>
                new Promise((resolve, reject) => {
                    imgElement.addEventListener('load', () => {
                        resolve();
                    });
                    imgElement.addEventListener('error', (event) => {
                        reject(event.target);
                    });
                }),
        ),
    );
    return;
}
