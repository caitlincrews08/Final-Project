const Meme = require("../models/Meme");

// Defining methods for the memesController
module.exports = {
  findAll: function(req, res) {
    Meme
      .find(req.query)
      .sort({ date: -1 })
      .then(dbMeme => res.json(dbMeme))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Meme
      .findById(req.params.id)
      .then(dbMeme => res.json(dbMeme))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Meme
      .create(req.body)
      .then(dbMeme => res.json(dbMeme))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Meme
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMeme => res.json(dbMeme))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Meme
      .findById({ _id: req.params.id })
      .then(dbMeme => dbMeme.remove())
      .then(dbMeme => res.json(dbMeme))
      .catch(err => res.status(422).json(err));
  }
};
