import express from "express"
import User from "../models/UserModel.js"

const router = express.Router()

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  }
  catch (error) {
    res.status(500).json(error)
  }
});

export default router