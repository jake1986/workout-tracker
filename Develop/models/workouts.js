const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter type of workout"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name of workout"
    },
    distance: {
      type: Number
    },
    duration: {
      type: Number,
      required: "Enter number of minutes"
    },
    weight: {
      type: Number
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    }
  }]

});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;