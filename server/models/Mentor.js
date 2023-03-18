const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Name"],
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
