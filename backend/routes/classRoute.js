const express = require('express')
const router = express.Router();

// courseController
const classController = require('../controller/classController')
// get classes
router.get('/classes', classController.getClass)

// post class
router.post('/addclass', classController.postClass)

// export router
module.exports = router;

