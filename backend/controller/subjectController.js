const db = require('../config/dbConfig');
// subject model
const Subject = db.Subject;

// get subjects
module.exports.getSubject = async (req, res) => {
    try {
        const { classId } = req.query;
        const subjects = await Subject.findAll({
            where: {
                classId: classId
            }
        });
        return res.status(200).send(subjects);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'An error occurred while fetching subjects.' }); // Send a response with status 500 and a message
    }
};


// add subject
module.exports.postSubject = async (req, res) => {
    try {
        // subject name
        const { subject_name } = req.body;
        // for foreign key
        const { course_id, class_id } = req.query;

        // subject object with column name
        const subjectObj = {
            subjectName: subject_name,
            classId: class_id,
            courseId: course_id,


        }
        // add subject to db
        const addSubject = await Subject.create(subjectObj);

        return res.status(200).send({message: 'subject added successfully'});

    } catch (error) {

        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(400).send({ error: 'An error occurred while fetching subjects.' });
    }
};
