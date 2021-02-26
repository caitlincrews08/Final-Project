const User = require("../models/User")

const saveMeme = (req, res) => {
  
  let meme = req.body.memeId;

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
} 

module.exports = saveMeme;