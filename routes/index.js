const routes = require('express').Router();
const controllers = require('../controllers/index');
 
routes.get('/', controllers.emaRoute);

routes.get('/pame', controllers.PameRoute);

routes.get('/gali', controllers.GaliRoute);

routes.get('/nefi', controllers.nefiRoute);

module.exports = routes;