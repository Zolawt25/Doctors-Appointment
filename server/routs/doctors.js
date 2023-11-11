const express = require('express');
const { getAllDoctors, createDoctor, getDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctors');
const { getComments, createComment, deleteComment } = require('../controllers/comments');
const router = express.Router();

router.route("/doctors").get(getAllDoctors).post(createDoctor)
router.route("/doctor/:id").get(getDoctor).patch(updateDoctor).delete(deleteDoctor)
router.route("/doctor/:id/comments").get(getComments).post(createComment)
router.route("/doctor/:id/comments/:id").delete(deleteComment)
module.exports = router