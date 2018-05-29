const router = require("express").Router();
const articles = require("./articles");

// Article routes
router.use("/articles", articles);

module.exports = router;
