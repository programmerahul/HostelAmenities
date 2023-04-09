const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "Hostel Amenities Backend",
    message: "/api/users|auth|hostels",
  });
});
module.exports = router;
