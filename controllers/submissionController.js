const Homework = require('../models/Homework');

// View Available Homework (Student)
exports.getAllHomework = async (req, res) => {
  try {
    const homework = await Homework.findAll();
    res.status(200).json(homework);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Submit Homework (Student)
exports.submitHomework = async (req, res) => {
  const { homeworkId, fileUrl } = req.body;

  try {
    let homework = await Homework.findByPk(homeworkId);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }

    // Add the submission to the submissions array
    let submissions = homework.submissions;
    submissions.push({
      studentId: req.userId,  // Student ID from JWT
      fileUrl,
      submittedAt: new Date(),
    });

    homework.submissions = submissions;
    await homework.save();

    res.status(200).json({ message: 'Homework submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
