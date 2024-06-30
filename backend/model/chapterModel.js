module.exports = (sequelize, Sequelize) => {
    const Chapter = sequelize.define('chapters', {
        chapterId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chapterName: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                notEmpty: true
            }
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

    return Chapter;
};
