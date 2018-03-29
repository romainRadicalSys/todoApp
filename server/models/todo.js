const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});
const nyvar = 'hello';
const model = mongoose.model('Todo', todoSchema);

module.exports = model;
