const { getdata, dbconnect, record } = require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Route for user login
app.post('/api/login', async (req, res) => {
  const { regNo, password } = req.body;

  try {
    const user = await getdata('student', { regNo });
 

    // if (!user || user.password !== password) {
    //   return res.status(400).json({ error: 'Invalid registration number or password' });
    // }

    res.json({ message: 'Success', user });
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const startServer = async () => {
  try {
    await dbconnect();
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
