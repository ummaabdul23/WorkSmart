const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create Sequelize instance to connect to MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME, // MySQL Database Name
  process.env.DB_USER, // MySQL Username
  process.env.DB_PASSWORD, // MySQL Password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  }
);

// Test MySQL connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected successfully');
  } catch (error) {
    console.error('MySQL connection failed:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
