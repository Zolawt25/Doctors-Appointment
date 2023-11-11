const express = require('express');
const { register, login, deleteAll } = require('../controllers/users');
const router = express.Router()

router.route("/register").post(register).delete(deleteAll)
router.route("/login").post(login)

module.exports = router