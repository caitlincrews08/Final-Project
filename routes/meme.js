const router = require("express").Router();
var Meme = require("../models/Meme.js");

router.post("/api/meme", ({body}, res) => {
  Meme.create(body)
  .then(dbMeme => {
    res.json(dbMeme);
  })
  .catch(err => {
    res.status(404).json(err);
  })
});

router.get("/api/meme", (req, res) => {
  Meme.find({}).sort({date: -1})
  .then(dbMeme =>{
    res.json(dbMeme);
  })
  .catch(err => {
    res.status(404).json(err);
  })
});

module.exports = router;

// this is where i will get memes the user created AND memes from the api
// checkout pupster activity