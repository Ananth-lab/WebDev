const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");


router.post("/add-user", controller.postUserDetails)

router.delete("/delete-user/:id", controller.deleteUserDetails)

router.get("/get-user", controller.getUserDetails)

module.exports = router;