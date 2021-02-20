const express = require('express');
const router = express.Router();
// const axios = require('axios');

var meme = require("../models/Meme");

module.exports = function(app) {
  router.get("/", function(req, res) {
    meme.find({}).then(function(dbMeme) {
      res.json(dbMeme);
    });
  });

  router.put("/create", function(req, res) {
    meme.updateOne({ _id: req.params.id }, { image: req.body.image }).then(function(dbMeme) {
      res.json(dbMeme);
    });
  });
};

module.exports = router;

// this is where i will get memes the user created AND memes from the api
// checkout pupster activity