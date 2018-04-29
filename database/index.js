'use strict';
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_development', 'root', null, {
  // sqlite! now!
  dialect: 'sqlite',

  // the storage engine for sqlite
  // - default ':memory:'
  storage: process.env.DATABASE_STORAGE || 'database_development.sqlite',
  omitNull: true
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

const User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  status  : Sequelize.STRING
  });

sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });

Courses.sync({force : true}).then(() => {
	const courses = [
		{
			name: 'Nodejs',
			prof_id: 1,
			student_id: 2,
			notes: 15
		}
	];
	return Promise.all(courses.map(course => Courses.create(course)));
});

const Courses = sequelize.import(path.join(__dirname, 'courses'));
exports.Courses = Courses;