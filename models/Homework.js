const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Homework model
const Homework = sequelize.define('Homework', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  submissions: {
    type: DataTypes.JSON, //stores submission details as JSON
    defaultValue: [],
  },
});

module.exports = Homework;
