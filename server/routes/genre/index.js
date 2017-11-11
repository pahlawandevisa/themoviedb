var express = require('express');
var genreController = require('./genre.controller.js');

var genres = express.Router();
// get all genres
genres.get('/', genreController.getAll);

module.exports = genres;
