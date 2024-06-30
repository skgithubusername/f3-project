require('dotenv').config();
const express = require('express');
const db = require('./config/dbConfig');

// routes
const courseRoutes = require('./routes/courseRoute');
const classRoutes = require('./routes/classRoute');
const subjectRoutes = require('./routes/subjectRoute');
const chapterRoutes = require('./routes/chapterRoute');
const topicRoutes = require('./routes/topicRoute');
const questionRoutes = require('./routes/questionRoute');

const app = express();
// port
const port = process.env.PORT ||3050;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// create table if not exist
db.seqeulize.sync()

// routes middleware
app.use(courseRoutes);
app.use(classRoutes);
app.use(subjectRoutes);
app.use(chapterRoutes);
app.use(topicRoutes);  
app.use(questionRoutes);  


// Start the server and listen on the specified port
app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start the server:", err);
    } else {
        console.log(`Server is running and listening on port ${port}`);
    }
});
