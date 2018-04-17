var express = require('express');
var router = express.Router();

/* GET all the courses */
router.get('/courses', (request, response) => {
  response.send('courses');
});

/* GET all the courses of a professor */
router.get('/courses/:professorName', (request, response) => {
  response.send('courses' + request.params.professorName);
});

/* GET all the students and their marks according to the professor and his course */
router.get('/courses/:professorName/:courseId', (request, response) => {
  response.send('courses' + request.params.professorName + request.params.courseId);
});

/* GET the mark of a single student according to the professor and his course */
router.get('/courses/:professorName/:courseId/:studentId', (request, response) => {
  response.send('courses' + request.params.professorName + request.params.courseId + request.params.studentId);
});

/* POST Allow professors to create a new course */
router.post('/:courseName', (request, response) => {
  request.params.courseName(request.params.courseName);
});

/* PUT Allow professors to update a course course */
router.put('/:courseName/update', (request, response) => {
  request.params.courseName(request.params.courseName + 'update');
});

/* DELETE Allow professors to delete a course */
router.delete('/:courseName/delete', (request, response) => {
  request.params.courseName(request.params.courseName + 'delete');
});

/* POST Allow professors to add a student and his mark to the professor's course */
router.post('/:courseName/:studentId', (request, response) => {
  request.params.courseName(request.params.courseName).studentId(request.params.studentId);
});

/* PUT Allow professors to update the mark of the student */
router.put('/:courseName/:studentId/update', (request, response) => {
  request.params.courseName(request.params.courseName).studentId(request.params.studentId + 'update');
});

/* DELETE Allow professors to delete a student from his course */
router.delete('/:courseName/:studentId/delete', (request, response) => {
  request.params.courseName(request.params.courseName).studentId(request.params.studentId + 'delete');
});

module.exports = router;
