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
        db.collection('ping').insert(data, {w: 1}, function (err, result) {
            d.resolve(result)
        })
    });
    return d.promise;
}

exports.addMessage = addMessage;



