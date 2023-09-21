const routes = require('express').Router();
const controllers = require('../controllers/index.js');
 
routes.get('/', controllers.emaRoute);

routes.get('/nefi', controllers.nefiRoute);

module.exports = routes;