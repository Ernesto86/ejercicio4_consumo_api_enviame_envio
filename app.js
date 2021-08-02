const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import routes
const routes = require('./routes/routes.js'); 

//register the route
routes(app);

app.listen(port, ()=> {
  console.log('RESTful API server running on ${port}');
});