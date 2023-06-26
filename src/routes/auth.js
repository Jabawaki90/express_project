const { Router } = require("express");
const User = require("../database/schemas/User");
const { hashPassword, comparePassword } = require("../utils/helpers");

const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.send(400);
  const userDB = await User.findOne({ username });
  if (!userDB) return res.send(401);
  const isValid = comparePassword(password, userDB.password);
  if (isValid) {
    return res.send(200);
  } else {
    return res.send(401);
  }
});

router.post("/register", async (req, res) => {
  const { username, email } = req.body;
  const userDB = await User.findOne({ $or: [{ username }, { email }] });
  if (userDB) {
    res.status(400).send({ msg: "User exists" });
  } else {
    const password = hashPassword(req.body.password);
    console.log(password);
    const newUser = await User.create({ username, password, email });
    newUser.save();
    res.send(201, newUser);
  }
});

module.exports = router;
