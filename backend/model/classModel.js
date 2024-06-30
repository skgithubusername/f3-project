module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define('classes', {
        classId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        className: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                notEmpty: true
            }
        },
        courseId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'courseId',
              },
        }
    });

    return Class;
};
