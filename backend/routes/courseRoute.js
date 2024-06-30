const express = require('express')
const router = express.Router();

// courseController
const courseController = require('../controller/courseController')
// get course
router.get('/courses', courseController.getCourse)

// post course
router.post('/addcourse', courseController.postCourse)

// export router
module.exports = router;

