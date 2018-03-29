const Todo = require('./models/todo.js');

var todos = ['feed the dog', 'walk the kids', 'water the plants'];
console.log(Todo.nyvar);
todos.forEach(function(todo, index) {
  console.log(todo);
  Todo.find({ name: todo }, function(err, todos) {
    if (!err && !todos.length) {
      console.log(todos);
      Todo.create({ completed: false, name: todo });
    }
  });
});
