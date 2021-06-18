let express = require('express');
let path = require('path');

let Router = express.Router();

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'build', 'index.html'));
})

module.exports = Router;