const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ todos: todos });
  });
});

router.post('/todos', (req, res) => {
  var todo = req.body;
  Todo.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ todo: todo, message: 'Todo Created' });
  });
});

router.put('/todos/:id', (req, res) => {
  var id = req.params.id;
  var todo = req.body;

  if (todo && todo._id !== id) {
    return res.status(500).json({ err: 'id dont match' });
  }

  Todo.findByIdAndUpdate(id, todo, { new: true }, (err, todo) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ todo: todo, message: 'Todo updated' });
  });
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios
    .get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
