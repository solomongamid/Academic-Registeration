'use strict';

const db = require('../database');

exports.find = (query = {}) => {
	return db.Courses.findAll({
		where: query
	});
};