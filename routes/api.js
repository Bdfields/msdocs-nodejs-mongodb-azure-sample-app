var express = require("express");
var router = express.Router();

// Example API endpoint
router.get("/example", function (req, res, next) {
  res.json({ message: "This is an example endpoint" });
});

// Another example API endpoint
router.post("/data", function (req, res, next) {
  const data = req.body;
  // Process the data here
  res.json({ message: "Data received", data: data });
});

module.exports = router;
