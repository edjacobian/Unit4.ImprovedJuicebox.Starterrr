const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You found the router, congrats");
});

router.use("/post", require("./post"));
router.use("/user", require("./user"));

module.exports = router;
