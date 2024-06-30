const db = require('../config/dbConfig');
// chapter model
const Chapter = db.Chapter;

// get chapters
module.exports.getChapter = async (req, res) => {
    try {
        const { subjectId } = req.query;
        const chapters = await Chapter.findAll({
            where: {
                subjectId: subjectId
            }
        });
        return res.status(200).send(chapters);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'An error occurred while fetching chapters.' }); // Send a response with status 500 and a message
    }
};


// add chapter
module.exports.postChapter = async (req, res) => {
    try {
        // chapter name
        const { chapter_name } = req.body;
        // for foreign key
        const { course_id, class_id,subject_id } = req.query;

        // chapter object with column name
        const chapterObj = {
            chapterName: chapter_name,
            subjectId: subject_id,
            classId: class_id,
            courseId: course_id,


        }
        // add chapter to db
        const addChapter = await Chapter.create(chapterObj);

        return res.status(200).send({message: 'Chapter added successfully'});

    } catch (error) {
        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(500).send({ error: 'An error occurred while fetching chapters.' });
    }
};
