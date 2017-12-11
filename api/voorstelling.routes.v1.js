
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Voorstelling = require('../model/voorstelling.model');


//
// Geef een lijst van alle voorstellingen.
//
routes.get('/voorstelling', function(req, res) {
    res.contentType('application/json');
    Voorstelling.find({})
        .then((voorstellingen) => {
        
        res.status(200).json(voorstellingen);
})
.catch((error) => res.status(401).json(error));
});


//
// Retourneer ��n specifieke voorstelling. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/voorstellingen/:_id', function(req, res) {
    res.contentType('application/json');
    Voorstelling.findOne({_id: req.params._id},function(err,result){
        res.status(200).json(result);
    });
});



//
// Voeg een film toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/films
//
routes.post('/voorstellingen', function(req, res) {
    res.contentType('application/json');
    Voorstelling.create({name: req.body.name,
        genre: req.body.genre,
        imagePath: req.body.imagePath,
        films: req.body.films,
        zaal: req.body.zaal,
        time: req.body.time},
        function (err, result) {
        if (err) return res.status(401).json(error);
        res.send(result);

    })

});

//
// Wijzig een bestaande films. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de films mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
//
// Vorm van de URL: PUT http://hostname:3000/api/v1/films/23
//

//



//

routes.put('/voorstellingen/:_id', function(req, res) {

    res.contentType('application/json');
    var _id = req.params._id;

    var update = {
        "name": req.body.name,
        "genre": req.body.genre,
        "time": req.body.time,
        "imagePath": req.body.imagePath,
        "films": req.body.films,
        "zaal": req.body.zaal,


      
    };

    Voorstelling.findById(_id)
        .then( voorstelling => {
            voorstelling.set(update);
            voorstelling.save();
            res.status(200).json(voorstelling);
        })
        .catch((error) => res.status(401).json(error));
});



//
// Verwijder een bestaande ingredient.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
//
// Vorm van de URL: DELETE http://hostname:3000/api/v1/films/23
//
routes.delete('/voorstellingen/:_id', function(req, res) {

    Voorstelling.remove({ _id: req.params._id })
        .then(voorstelling => {
            res.json({status: 200, message: 'voorstelling deleted successfully'});
        }).catch(err => {
        res.end('Error occurred while deleting user with id ' + req.params._id, err);
    })


});

module.exports = routes;