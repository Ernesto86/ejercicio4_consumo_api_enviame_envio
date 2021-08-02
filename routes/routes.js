module.exports = (app) => {
    const todoList = require('../controllers/controller.js');  
    app.route('/listar')
      .get(todoList.listarEnvios);         
};