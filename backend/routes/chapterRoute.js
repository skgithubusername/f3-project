const express = require('express')
const router = express.Router();

// chapterController
const chapterController = require('../controller/chapterController')
// get chapters
router.get('/chapters', chapterController.getChapter)

// post chapter
router.post('/addchapter', chapterController.postChapter)

// export router
module.exports = router;

