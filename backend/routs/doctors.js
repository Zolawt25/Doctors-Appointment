const express = require('express');
const { getAllDoctors, createDoctor, getDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctors');
const router = express.Router();

router.route("/doctors").get(getAllDoctors).post(createDoctor)
router.route("/doctor/:id").get(getDoctor).patch(updateDoctor).delete(deleteDoctor)

module.exports = router