const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise")

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: new Date()
    },
    exercises: {
      type: [Exercise]
    }
    
  });

  const Workouts = mongoose.model("Workouts", WorkoutSchema)

  module.exports = Workouts;