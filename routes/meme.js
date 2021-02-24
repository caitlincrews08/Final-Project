const router = require("express").Router();
const memesController = require("../controllers/memesController")

// Matches with "/api/memes"
router.route("/")
  .get(memesController.findAll)
  .post(memesController.create);

// Matches with "/api/memes/:id"
router
  .route("/:id")
  .get(memesController.findById)
  .put(memesController.update)
  .delete(memesController.remove);

module.exports = router;





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