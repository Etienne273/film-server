
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Film = require('../model/film.model');

//
// Geef een lijst van alle films.
//
routes.get('/films', function(req, res) {
    res.contentType('application/json');
    Film.find({})
        .then((films) => {
            
            res.status(200).json(films);
        })
        .catch((error) => res.status(401).json(error));
});

//
// Retourneer ��n specifieke film. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/films/:id', function(req, res) {

});

//
// Voeg een film toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/films
//
routes.post('/films', function(req, res) {

});

//
// Wijzig een bestaande film. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de films mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
//
// Vorm van de URL: PUT http://hostname:3000/api/v1/films/23
//
routes.put('/films/:id', function(req, res) {

});

//
// Verwijder een bestaande film.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
//
// Vorm van de URL: DELETE http://hostname:3000/api/v1/films/23
//
routes.delete('/films/:id', function(req, res) {

});

module.exports = routes;