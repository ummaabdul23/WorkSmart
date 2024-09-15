const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const homeworkRoutes = require('./routes/homeworkRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
require('dotenv').config();

const app = express();

// Connect to MySQL
connectDB();

// Middleware to parse JSON
app.use(bodyParser.json());

app.use(express.static('public'));


// Routes for user authentication
app.use('/api/auth', authRoutes);

// Homework routes
app.use('/api/homework', homeworkRoutes);

// Submission routes
app.use('/api/submission', submissionRoutes);

// Sync Sequelize models with MySQL
sequelize.sync().then(() => {
  console.log('Database & tables created!');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
