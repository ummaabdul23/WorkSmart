const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('teacher', 'student'),
    allowNull: false,
  },
});

module.exports = User;
