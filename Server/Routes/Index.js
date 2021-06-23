let express = require('express');
let path = require('path');

let Router = express.Router();

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'build', 'index.html'));
})


Router.post('/builds', (req, res) => {
    console.log('Builds Route')
});

module.exports = Router;