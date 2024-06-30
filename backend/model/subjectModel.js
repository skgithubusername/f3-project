module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subjects', {
        subjectId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subjectName: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },

        classId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'classes',
                key: 'classId',
            },
        },
        courseId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'courseId',
            },
        }
    });

    return Subject;
};
