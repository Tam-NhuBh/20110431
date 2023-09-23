const express = require('express');
const router = express.Router();
const MSSVController = require('../controllers/MSSVController');

router.get('/', MSSVController.getAllStudents);

module.exports = router;
