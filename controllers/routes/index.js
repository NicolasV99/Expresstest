const routes = require('express').Router();
const lesson1Controller = require('../lesson1');

routes.get('/', lesson1Controller.nicolasRoute);
routes.get('/luis', lesson1Controller.luisRoute);
routes.get('/margarita', lesson1Controller.margaritaRoute);

module.exports = routes;