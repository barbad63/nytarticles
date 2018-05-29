const router = require("express").Router();
const apiRoutes = require("./articles");

// Article routes
router.use("/articles", apiRoutes);

module.exports = router;
