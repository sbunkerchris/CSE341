const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hi Sarah! Im Chris Bunker');
});

module.exports = routes;