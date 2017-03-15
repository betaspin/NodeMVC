/**
 * Created by Jérôme Lamy on 14/03/17.
 */
var Q = require('q');
var mongo = require('mongodb').MongoClient;
var configDB = require('../../config/database.js');
var connexion = mongo.connect(configDB.url);


var addMessage = function(data){
    d = Q.defer();
    connexion.then(function(db){
        db.collection('messages').insert(data, {w: 1}, function (err, result) {
            d.resolve(result)
        })
    });
    return d.promise;
}

var listAll = function(){
    d = Q.defer();
    connexion.then(function(db){
        db.collection('messages').find().toArray(function (err, messages) {
            d.resolve(messages);
        });
    });
    return d.promise;
};

var listByAuthor = function(author){
    d = Q.defer();
    connexion.then(function(db){
        db.collection('messages').find({ auteur : author }).toArray(function (err, messages) {
            d.resolve(messages);
        });
    });
    return d.promise;
};


exports.addMessage      = addMessage;
exports.listAll         = listAll;
exports.listByAuthor    = listByAuthor;



