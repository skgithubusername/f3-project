const Sequelize = require('sequelize');

// configuration
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const seqeulize = new Sequelize(dbName, dbUser, dbPassword, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    // logging: false,

});

// try {
//     seqeulize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

//   database handle
const db = {};
db.Sequelize = Sequelize;
db.seqeulize = seqeulize;

// course model
db.Course = require('../model/courseModel')(seqeulize,Sequelize)

// class model
db.Class = require('../model/classModel')(seqeulize,Sequelize)

// subject model
db.Subject = require('../model/subjectModel')(seqeulize,Sequelize)

// chapter model
db.Chapter = require('../model/chapterModel')(seqeulize,Sequelize)

// topic model
db.Topic = require('../model/topicModel')(seqeulize,Sequelize)

// question model
db.Question = require('../model/questionModel')(seqeulize,Sequelize)


// export db
module.exports = db;