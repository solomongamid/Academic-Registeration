'use strict';
const Courses = (sequelize, DataTypes) => {
	return sequelize.define('Courses', {
		name: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: 'Messing the name of course'}}
		},

		prof_id: {
			type: DataTypes.INTEGER
		},

		student_id: {
			type: DataTypes.INTEGER
		},

		notes: {
			type: DataTypes.INTEGER
		}
	});
};

module.exports = Courses;