const db = require('../config/dbConfig');
// class model
const Class = db.Class;

// get class
module.exports.getClass = async (req, res) => {
    try {
        const { courseId } = req.query;
        const classes = await Class.findAll({
            where: {
                courseId: courseId
            }
        });
        return res.status(200).send(classes);
    } catch (error) {
        console.error(error);  // Better to use console.error for logging errors
        return res.status(500).send({ error: 'An error occurred while fetching classes.' }); // Send a response with status 500 and a message
    }
};


// add class
module.exports.postClass = async (req, res) => {
    try {
        // class name
        const { class_name } = req.body;
        // for foreign key
        const { course_id } = req.query;
        
        // class object with column name
        const classObj = { 
            className: class_name,
            courseId: course_id,

        }
        // add class to db
        const addClass = await Class.create(classObj);

        return res.status(200).send({message: 'Class added successfully'});

    } catch (error) {
        console.error("error: ", error.name, "message: ", error.errors[0].message);
        if (error.name && error.errors[0].message) {
            return res.status(400).send({
                message: error.errors[0].message,
                error: error.name
            })
        }
        return res.status(500).send({ error: 'An error occurred while fetching classes.' }); 
    }
};
