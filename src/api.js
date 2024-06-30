// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const getCourses = () => api.get('/courses');
export const getClasses = (courseId) => api.get(`/classes?courseId=${courseId}`);
export const getSubjects = (classId) => api.get(`/subjects?classId=${classId}`);
export const getChapters = (subjectId) => api.get(`/chapters?subjectId=${subjectId}`);
export const getTopics = (chapterId) => api.get(`/topics?chapterId=${chapterId}`);
export const addQuestion = (data) => api.post('/questions', data);
