const express = require('express');
const app = express();
const controllers = require('./controllers/index.js');

const routes = require('express').Router()
 
app.get('/', 'controllers.EmaRoute');

app.get('/nefi', 'controllers.NefiRoute');
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
