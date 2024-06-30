const express = require('express')
const router = express.Router();

// subjectController
const subjectController = require('../controller/subjectController')
// get subjects
router.get('/subjects', subjectController.getSubject)

// post subject
router.post('/addsubject', subjectController.postSubject)

// export router
module.exports = router;

