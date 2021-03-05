const express = require('express');
const { isLength } = require('lodash');
const router = express.Router();

const Meme = require("../models/Meme");
const User = require("../models/User");

router.get('/me', (req, res) => {
  // console.log(req.user);
  const { _id, name, email, date } = req.user;

  return res.json({ _id, name, email, date });
});

router.get("/allusers", (req, res) => {
  User.find().then(users => res.json(users)).catch(err => res.json(err))
})

// get memes
router.get("/memes", (req, res) => {
  // console.log(req.user)

  Meme.find().where('_id').in(req.user.memes).exec((error, dbMemes) => {
    if (error)
      return res.status(400).json(error)

    res.json(dbMemes);
  })

});

// save memes
router.put("/memes", async (req, res) => {
  let memes = req.body;
  await memes.forEach(async meme => {
    await Meme.create(meme)
      .then(({ _id }) => User.findByIdAndUpdate(req.user._id, { $push: { memes: _id } }, { new: true }))
      .catch(err => {
        res.json(err);
      });
  });
  res.json({ success: true });
});

// delete memes
router.put("/removememes", (req, res) => {
  let memes = req.body;
  // console.log("backend memes", memes);
  // await memes.forEach(async meme => {
   User.findOneAndUpdate(req.body.userId, { $pullAll: { memes: memes } }).then(data => res.json({ success: true })).catch(err => console.log(err))
  // });
  ;
});


module.exports = router;

// this is where I will be adding user favorites info/memes