// TODO: !!! Import
import express from 'express';
import path from 'path';
import serveIndex from 'serve-index';
import serveStatic from 'serve-static';
import { forTime } from '../../src/functions/forTime';
// import opn from 'open';

// TODO: !!! Uninstall express-throttle-bandwidth
// const throttle = require('express-throttle-bandwidth');

// TODO: as indipendent library

const PORT = 8070;

const staticBasePath = path.join(__dirname, '../../');

const app = express();

//app.use(throttle(10 /* bits per second */));

app.use(async (request, response, next) => {
    if (request.query.throttle) {
        const throttle = parseInt(request.query.throttle as string);
        if (isNaN(throttle)) {
            return response
                .status(400)
                .send(`Query parameter "throttle" should be valid number.`);
        }
        await forTime(throttle);
    }
    return next();
});
app.use(serveStatic(staticBasePath, { index: false, cacheControl: false }));
app.use(serveIndex(staticBasePath, { icons: true }));
app.listen(PORT);

console.log(
    `Static server listening on port http://localhost:${PORT}/samples/`,
);
// TODO: Only if not opened
// !!! opn(`http://localhost:${PORT}/samples`);

// TODO: !!! Do not run samples server without build watch
