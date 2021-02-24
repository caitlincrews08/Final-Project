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


// this is where i will get memes the user created AND memes from the api
// checkout pupster activity