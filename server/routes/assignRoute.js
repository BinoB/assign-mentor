const express = require("express");
const router = express.Router();
const {
  createMentor,
  createStudent,
  assignStudent,
  changeMentor,
  allAssignedStudent,
  showAssignedMentor,
} = require("../controllers/assignController");

router.post("/mentor", createMentor);
router.post("/Student", createStudent);
router.post("/mentors/:mentorId/students/:studentId", assignStudent);
router.put("/students/:studentId/mentor/:mentorId", changeMentor);
router.get("/mentors/:mentorId/students", allAssignedStudent);
router.get("/students/:studentId/mentor", showAssignedMentor);

module.exports = router;
