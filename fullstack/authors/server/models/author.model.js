const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Author must have a first name"],
      minlength: [2, "First name must be at least two characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Author must have a last name"],
      minlength: [2, "Last name must be at least two characters long"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);
