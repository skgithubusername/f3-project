const db = require('../config/dbConfig');
// course model
const Course = db.Course;

// get courses
module.exports.getCourse = async (req, res) => {
    try {
        const courses = await Course.findAll();
        return res.status(200).send(courses);
    } catch (error) {
        console.error(error);  // Better to use console.error for logging errors
        return res.status(500).send({ error: 'An error occurred while fetching courses.' }); // Send a response with status 500 and a message
    }
};


// add course
module.exports.postCourse = async (req, res) => {
    try {
        // course name
        const { course_name } = req.body;
        // course object with column name
        const courseObj = { courseName: course_name }
        // add courseto db
        const addCourse = await Course.create(courseObj);

        return res.status(200).send({message: 'Course added successfully'});

    } catch (error) {
        // console.log(error);
        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(500).send({ error: 'An error occurred while fetching courses.' }); 
    }
};
