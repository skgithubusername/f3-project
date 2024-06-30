const db = require('../config/dbConfig');
// topic model
const Topic = db.Topic;

// get topics
module.exports.getTopic = async (req, res) => {
    try {
        const { chapterId } = req.query;
        const topics = await Topic.findAll({
            where: {
                chapterId: chapterId
            }
        });
        return res.status(200).send(topics);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'An error occurred while fetching topics.' }); 
    }
};


// add topic
module.exports.postTopic = async (req, res) => {
    try {
        // topic name
        const { topic_name } = req.body;
        // for foreign key
        const { course_id, class_id,subject_id,chapter_id } = req.query;

        // topic object with column name
        const topicObj = {
            topicName: topic_name,
            chapterId:chapter_id,
            subjectId: subject_id,
            classId: class_id,
            courseId: course_id,


        }
        // add topic to db
        const addTopic = await Topic.create(topicObj);

        return res.status(200).send({message: 'topic added successfully'});

    } catch (error) {
        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(500).send({ error: 'An error occurred while fetching topics.' });
    }
};
