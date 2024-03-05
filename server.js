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

app.get('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts');
      res.json(user);
    } catch (error) {
        res.status(500).json(error);
        }
});

app.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body, {new: true});
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});



app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});