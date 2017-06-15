'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// rewrite virtual urls to react app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}...`);
})
