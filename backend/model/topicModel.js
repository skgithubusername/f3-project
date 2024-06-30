module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define('topics', {
        topicId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        topicName: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        chapterId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'chapters',
                key: 'chapterId',
            },
        },
        subjectId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'subjects',
                key: 'subjectId',
            },
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

    return Topic;
};
