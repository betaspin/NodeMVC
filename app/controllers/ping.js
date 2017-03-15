/**
 * Created by Jérôme Lamy on 14/03/17.
 */
var ping = require('../models/ping.js');

exports.addMessage = function(req, res){
    if (req.query.message === undefined) {
        res.send('Error');
        return;
    }

    var message = req.query.message;
    var date = new Date();
    var data = {message: message, date: date};

    ping.addMessage(data).then(function(result){
        res.send("Ping ajouté");
    })
};