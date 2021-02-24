const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema(
  {
    tag: {
      type: String
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

const Meme = mongoose.model('Meme', memeSchema);
module.exports = Meme;