const mongoose = require('mongoose');

mongoose.connect('mongodb://tacchini69800:azerty123@ds121889.mlab.com:21889/todo-app', function(err) {
  if (err) {
    console.log('Failed connection to Mongo');
  } else {
    console.log('Connected to Mongo');
  }
});
