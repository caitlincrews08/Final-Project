// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/memes", function(req, res) {
//     db.Meme.find({}).then(function(dbMeme) {
//       res.json(dbMeme);
//     });
//   });

//   app.put("/api/memes/:id", function(req, res) {
//     db.Meme.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbMeme) {
//       res.json(dbMeme);
//     });
//   });
// };