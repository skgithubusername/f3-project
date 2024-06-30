module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('courses', {
        courseId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        courseName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
    });

    return Course;
};
