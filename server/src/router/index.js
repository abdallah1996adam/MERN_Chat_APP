const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).json({ message: "Hello" });
});

router.post("/signin", userController.signup);
router.get("/signup", userController.signup);

router.all("*", (request, response) => {
  response.status(404).json({ message: "page not found !" });
});

module.exports = router;
