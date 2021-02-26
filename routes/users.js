const express = require('express');
const router = express.Router();

const Meme = require("../models/Meme");
const User = require("../models/User");

router.get('/me', (req, res) => {
  const { _id, name, email, date } = req.user;

  return res.json({ _id, name, email, date });
});

router.get("/", (req, res) => {
  User.find().then(result => res.json(result))

})

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


// router.get("/memes", (req, res) => {
//   // User.find().then
// }) 


module.exports = router;

// this is where I will be adding user favorites info/memes