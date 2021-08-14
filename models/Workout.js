const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "String is Required"
    },
  
    name: {
      type: String,
      unique: true,
      required: true
    },
  
    duration: {
      type: Number,
      min: 1
    },
  
    weight: {
        type: Number,
        min: 1
    },
  
    reps: {
        type: Number,
        min: 1
    },
  
    sets: {
      type: Number,
      min: 1
    },
  });

  const Workout = mongoose.model("Workout", WorkoutSchema)

  module.exports = Workout;