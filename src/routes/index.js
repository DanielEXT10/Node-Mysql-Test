const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customerControllers');

router.get('/', customerControllers.list);
router.post('/add/', customerControllers.save);


module.exports = router;