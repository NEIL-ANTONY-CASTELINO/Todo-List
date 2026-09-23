const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // Choose any available port
const taskRoutes = require('./routes');

app.use(express.json());



// Replace 'your_connection_string' with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Use task routes
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
