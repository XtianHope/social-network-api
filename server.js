// Import required modules
const mongoose = require('mongoose');
const express = require('express');


// Import routes
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');

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

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);



app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});