/**
 * Created by Jérôme Lamy on 14/03/17.
 */
var Q = require('q');
var mongo = require('mongodb').MongoClient;
var connexion = mongo.connect('mongodb://localhost:27017/exam');


var addMessage = function(data){
    d = Q.defer();
    connexion.then(function(db){
        db.collection('ping').insert(data, {w: 1}, function (err, result) {
            d.resolve(result)
        })
    });
    return d.promise;
}

exports.addMessage      = addMessage;



