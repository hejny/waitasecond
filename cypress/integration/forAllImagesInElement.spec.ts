import { forAllImagesInElement } from '../../src/functions/forAllImagesInElement';

context('waitasecond samples', () => {
    /*
    beforeEach(() => {
        // TODO: Run server (there is problem with running the express/http here)
    });
    */

    const SCREENSHOT_CONFIG = {
        imageConfig: {
            createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
            threshold: 0.01, // Amount in pixels or percentage before snapshot image is invalid
            thresholdType: 'percent', // Can be either "pixel" or "percent"
        },
        name: 'custom image name', // Naming resulting image file with a custom name rather than concatenating test titles
        separator: 'custom image separator', // Naming resulting image file with a custom separator rather than using the default ` #`
    };

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

            cy.then(() => {
                cy.document().toMatchImageSnapshot();
            });

            //cy.document().toMatchImageSnapshot(SCREENSHOT_CONFIG);
            /*
            for (let i = 0; i < 5; i++) {
                cy.log(`Visit ${i}`);
                cy.matchImageSnapshot(...SCREENSHOT_CONFIG);
            }
            */
        });
    });
});
