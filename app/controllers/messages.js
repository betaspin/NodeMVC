/**
 * Created by Jérôme Lamy on 14/03/17.
 */
var message = require('../models/messages.js');

exports.addMessage = function (req, res) {
    if (req.body.message === undefined
        || req.body.message === ''
        || req.body.auteur === undefined
        || req.body.auteur === '') {
        res.send('Error');
        return;
    }
    var message = req.body.message;
    var auteur = req.body.auteur;
    var data = {message: message, auteur: auteur};
    message.addMessage(data).then(function(result){
        res.send("Message ajouté");
    })
};

// Affiche la liste des message
exports.listAll = function(req, res){
    message.listAll().then(function(messages){
        res.send({ messages : messages });
    });
};

// Affiche la liste des messages de l'auteur
exports.listByAuthor = function(req, res){
    message.listByAuthor(req.params.auteur).then(function(messages){
        if(messages.length > 0)
            res.send({ messages : messages });
        else
            res.send('Error');
    });
};