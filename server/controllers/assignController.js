const Mentor = require("../models/Mentor");
const Student = require("../models/Student");

//createMentor

const createMentor = async (req, res) => {
  try {
    const { name } = req.body;
    const mentor = new Mentor({ name });
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

//createStudent

const createStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const student = new Student({ name });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

//assignStudent

const assignStudent = async (req, res) => {
  try {
    const { mentorId, studentId } = req.params;
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);

    if (!mentor || !student) {
      return res.status(404).json({ error: "Not found" });
    }

    if (student.mentor) {
      return res.status(400).json({ error: "Student already has a mentor" });
    }

    if (!mentor.students) {
      mentor.students = [];
    }

    mentor.students.push(student);
    student.mentor = mentor;
    await mentor.save();
    await student.save();
    res.json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// Assign or change mentor for particular student

const changeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);
    if (!mentor || !student) {
      return res.status(404).json({ error: "Not found" });
    }
    if (student.mentor) {
      student.mentor.students.pull(student);
      await student.mentor.save();
    }
    if (!mentor.students) {
      mentor.students = [];
    }
    mentor.students.push(student);
    student.mentor = mentor;
    await mentor.save();
    await student.save();
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// Show all students for a particular mentor

const allAssignedStudent = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId).populate("students");
    if (!mentor) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(mentor.students);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// Show previously assigned mentor for a particular student

const showAssignedMentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("mentor", "name _id");
    if (!student) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(student.mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};



module.exports = {
  createMentor,
  createStudent,
  assignStudent,
  changeMentor,
  allAssignedStudent,
  showAssignedMentor,
};
