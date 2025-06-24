const express = require("express");
const router = express.Router();
const user = require("../Model/userModel");
const userController = require("../Controllers/userController");

router.get("/",userController.getAllUsers);
router.post("/",userController.addUsers);

//export
module.exports = router;