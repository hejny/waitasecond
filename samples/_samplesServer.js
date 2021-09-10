const express = require('express');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const path = require('path');
const opn = require('open');
const throttle = require('express-throttle-bandwidth');

// TODO: as indipendent library

const PORT = 8070;

const staticBasePath = path.join(__dirname, '..');

const app = express();

app.use(throttle(10 /* bits per second */));
app.use(serveStatic(staticBasePath, { index: false }));
app.use(serveIndex(staticBasePath, { icons: true }));
app.listen(PORT);

console.log(`Static server listening on port ${PORT}.`);
// TODO: Only if not opened
// !!! opn(`http://localhost:${PORT}/samples`);
