import { forAllImagesInElement } from '../../src/functions/forAllImagesInElement';

context('waitasecond samples', () => {
    /*
    beforeEach(() => {
        // TODO: Run server (there is problem with running the express/http here)
    });
    */

    const SCREENSHOT_CONFIG: [string, object] = [
        'forAllImagesInElement',
        {
            capture: 'viewport',
        },
    ];

    describe('cleanup of elements', () => {
        it('wait untill all images are load', async () => {
            cy.visit(`http://localhost:8070/samples/forAllImagesInElement.html`)
                // Test NOT matchImageSnapshot
                //.screenshot(...SCREENSHOT_CONFIG)
                .window()
                .then(async (window) => {
                    await forAllImagesInElement(window.document.body);
                })
                .wait(1000);

            cy.matchImageSnapshot(...SCREENSHOT_CONFIG);
            cy.matchImageSnapshot(...SCREENSHOT_CONFIG);
            /*
            for (let i = 0; i < 5; i++) {
                cy.log(`Visit ${i}`);
                cy.matchImageSnapshot(...SCREENSHOT_CONFIG);
            }
            */
        });
    });
});
