var express = require('express');
var filmController = require('./film.controller.js');

var films = express.Router();
// get all films
films.get('/', filmController.getAll);
// get one film
films.get('/:id([0-9a-f]{24})', filmController.getOne);
// get by  title
films.get('/query', filmController.getByQuery);
// inserimento
films.post('/', filmController.insertOne);

module.exports = films;
