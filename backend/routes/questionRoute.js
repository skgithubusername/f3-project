const express = require('express')
const router = express.Router();

//  questionController
const questionController = require('../controller/questionController')
// // get classes
// router.get('/classes',  questionController.getClass)


// get question by courseid 
router.get('/questions/course/:courseId',  questionController.getQuestionByCourseId)

// post class
// router.post('/addclass',  questionController.postClass)

// export router
module.exports = router;

