const express = require('express');
const router = express.Router();
const mvcController = require('../controllers/mvcController');

// Middleware để log chi tiết giao thức POST hoặc GET và URL
router.use((req, res, next) => {
  console.log(`[${req.method}] URL: ${req.originalUrl}`);
  next();
});

// Routes
router.get('/', mvcController.getAll); // Endpoint /
router.post('/:id/:name', mvcController.postStudent); // Endpoint /<id>/<name>
router.get('/message/:id?', mvcController.getMessage); // Endpoint /message/<id>

module.exports = router;
