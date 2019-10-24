const router = require("express").Router();
const jwtMiddleware = require("../middlewares/jwtMiddleware");

//Private routes
router.get("/", jwtMiddleware, (req, res) => {
  res.send("Successfully loaded Home page!");
});

module.exports = router;
