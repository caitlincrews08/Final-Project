const express = require('express');
const router = express.Router();

const Meme = require("../models/Meme");
const User = require("../models/User");

router.get('/me', (req, res) => {
  console.log(req.user);
  const { _id, name, email, date } = req.user;

  return res.json({ _id, name, email, date });
});

// get memes
router.get("/memes", (req, res) => {
  User.find({ memes })
    .then(dbMemes => {
      res.json(dbMemes);
    })
    .catch(err => {
      res.json(err);
    });
})

// save memes
router.put("/memes", async (req, res) => {
  const memes = req.body;
  await memes.forEach (async meme => {
    await Meme.create(meme)
      .then(({_id}) => User.findByIdAndUpdate(req.user._id, { $push: { memes: _id } }, { new: true }))
      .catch(err => {
        res.json(err);
      });
  });
  res.json({success: true});
  });

module.exports = router;

// this is where I will be adding user favorites info/memes