const Homework = require('../models/Homework');

// Create Homework (Teacher)
exports.createHomework = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const homework = await Homework.create({
      title,
      description,
      dueDate,
      teacherId: req.userId,  // Teacher ID from JWT
    });

    res.status(201).json(homework);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Homework for a Teacher
exports.getHomework = async (req, res) => {
  try {
    const homework = await Homework.findAll({ where: { teacherId: req.userId } });
    res.status(200).json(homework);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
