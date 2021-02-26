const express = require('express');
const router = express.Router();
const User = require("../models/User")

router.get('/me', (req, res) => {
  console.log(req.user);
  const { _id, name, email, date } = req.user;

  return res.json({ _id, name, email, date });
});

router.get("/", (req, res) => {

  User.find().then(result => res.json(result))

})

router.put("/savememe", (req, res) => {

  User.findByIdAndUpdate(
    req.user.id,
    {$push: {memes: meme}}
  ).exec((err, result) => {
    if(err){
      return res.status(400).json({ error: err})
    } else{
      res.json(result);
    }
  })

})

module.exports = router;

// this is where I will be adding user favorites info/memes