const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HighScoresSchema = new Schema({
  initials: {
    type: Schema.Types.String,
    required: true
  },
  score: {
    type: Schema.Types.Number,
    required: true
  }
});

module.exports = Highscores = mongoose.model("HighScores", HighScoresSchema);
