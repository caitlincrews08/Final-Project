const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Meme = mongoose.model('Meme', MemeSchema);