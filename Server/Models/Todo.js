const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
  value: { type: String } 
});

const ToDoModel = mongoose.model('Todo', ToDoSchema);
module.exports = ToDoModel;
