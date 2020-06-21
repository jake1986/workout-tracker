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
      required: true
      // required: "Enter type of workout"
    },
    name: {
      type: String,
      required: true
      // required: "Enter a name of workout"
    },
    distance: {
      type: Number
    },
    duration: {
      type: Number,
      required: true
      // required: "Enter number of minutes"
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