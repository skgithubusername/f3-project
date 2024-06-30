module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define('questions', {
        questionId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        marks: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        souce: {
            type: Sequelize.STRING,
            allowNull: true,

        },
        answer: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        option: {
            type: Sequelize.JSON,
            allowNull: true,
        },
        isUsed: {
            type: Sequelize.BOOLEAN
        },
        // foreign keys
        topicId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'topics',
                key: 'topicId',
            },
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
