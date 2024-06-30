const express = require('express')
const router = express.Router();

// topicController
const topicController = require('../controller/topicController')
// get topics
router.get('/topics', topicController.getTopic)

// post subject
router.post('/addtopic', topicController.postTopic)

// export router
module.exports = router;

