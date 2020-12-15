const express = require('express');
const path = require('path');

const app = express();

const DIST = path.join('dist');
const HTML = path.join(DIST, 'index.html');

app.use(express.static(DIST));

app.get('/', (req, res) => {
    res.sendFile(HTML);
});

app.listen('8080', err => {
    if (err) {
        console.log('An error occurred starting the server => ', err);
    } else {
        console.log('Server running on port 8080');
        console.log('===========================');
    }
});
