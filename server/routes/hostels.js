const express = require("express");
const Router = express.Router();
const auth = require("../middleWare/auth");
const _ = require("lodash");
const Hostel = require("../models/hostel");
Router.get("/:id", async (req, res) => {
  res.send(await Hostel.findById(req.params.id));
});
Router.get("/", async (req, res) => {
  res.send(await Hostel.find());
});
Router.post("/", auth, async (req, res) => {
  const aUser = {};
  aUser._id = req.user._id;
  aUser.name = req.user.name;
  const hostel = new Hostel({
    name: req.body.name,
    amenities: req.body.amenities,
    author: aUser,
    description: req.body.description,
    steps: req.body.steps,
  });
  await hostel.save();
  res.send(hostel);
});
Router.put("/:id", auth, async (req, res) => {
  const hostel = await Hostel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    amenities: req.body.amenities,
    author: req.user,
    description: req.body.description,
    steps: req.body.steps,
  });
  res.send(hostel);
});
Router.delete("/:id", async (req, res) => {
  res.send(await Hostel.findByIdAndDelete(req.params.id));
});
module.exports = Router;
