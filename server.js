// Import required modules
const mongoose = require('mongoose');
const express = require('express');

// Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


// Define Routes
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});