/**
 * 🌌 Waits until end of the universe
 *
 * @returns {Promise<void>} that never ever resolved
 */
export function forEver(): Promise<never> {
    return new Promise((resolve) => {
        // Note: In some later versions of Node it happens that the process is exited even though there is await forEver() waiting.
        //       My theory is that this is because when GC recognizes that there is no reference to the resolve function,
        //       It will just exit the process because it knows 100% that nothing new will ever happen.
        //       BUT this is unwanted behavior. When the user uses await forEver() it means that there is the intention to wait and not terminate the process
        //       So I have to prevent this behavior by keeping the reference to the resolve function and holding Node on to hope that something can happen.

        setInterval(() => {
            resolve /* <- Note: Not called just keeping a reference */;
        }, 3600 * 1000 /* <- Note: It does not matter how frequent this interval is */);
    });
}
