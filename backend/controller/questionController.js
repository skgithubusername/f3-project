const { where } = require('sequelize');
const db = require('../config/dbConfig');
// subject model
const Question = db.Question;

// get questions
// module.exports.getQuestion = async (req, res) => {
//     try {
//         const { classId } = req.query;
//         const questions = await Question.findAll({
//             where: {
//                 classId: classId
//             }
//         });
//         return res.status(200).send(subjects);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ error: 'An error occurred while fetching subjects.' }); // Send a response with status 500 and a message
//     }
// };


// get all questions
module.exports.getAllQuestion = async (req, res) => {
    try {
        
        const questions = await Question.findAll();
        return res.status(200).send(questions);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'An error occurred while fetching subjects.' }); // Send a response with status 500 and a message
    }
};


// get question by course id 
module.exports.getQuestionByCourseId = async (req, res) => {
    try {
        const {courseId} = req.params
        console.log(courseId)
        // const questions = await Question.findAll({
        //     where: {
        //         courseId:  courseId,
        //       },
        // });
        // return res.status(200).send(questions);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'An error occurred while fetching subjects.' }); // Send a response with status 500 and a message
    }
};

// add question
module.exports.postQuestion = async (req, res) => {
    try {
        // question
        const { question,
            question_type,
            question_marks,
            question_source,
            option,
            answer,
            is_used } = req.body;

        // for foreign key
        const { course_id, class_id, subject_id, chapter_id, topic_id } = req.query;

        // question object with column name
        const questionObj = {
            question: question,
            type: question_type,
            marks: question_marks,
            source: question_source,
            answer: answer,
            option: option,
            isUsed: is_used,
            // foreign keys
            topicId: topic_id,
            chapterId: chapter_id,
            subjectId: subject_id,
            classId: class_id,
            courseId: course_id,


        }
        // add question to db
        const addQuestion = await Question.create(questionObj);

        return res.status(200).send({ message: 'question added successfully' });

    } catch (error) {

        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(400).send({ error: 'An error occurred while fetching questions.' });
    }
};
