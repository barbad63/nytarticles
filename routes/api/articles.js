const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/articles")
  .get(articlesController.findAll)
  .post(articlesController.create); //the one I am working on

// Matches with "/api/articles/:id"
router
  .route("/articles/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
