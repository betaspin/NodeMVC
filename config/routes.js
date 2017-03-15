/**
 * Created by Jérôme Lamy on 14/03/17.
 */
var ping = require('../app/controllers/ping');
var messages = require('../app/controllers/messages');

module.exports = function (app) {
    // Affiche le message "Hello World"
    app.get('/hello-world', function(req, res){
        res.send("Hello World !")
    });

    // Affiche le message "Coucou [name]"
    app.get('/coucou/:name', function(req, res){
        res.render('coucou', { name : req.params.name });
    });

    // Insert un document dans la collection ping
    // url d'appel : /ping?message=text
    app.get('/ping', ping.addMessage);

    // Insert un document dans la collection message
    // Utiliser le formulaire form.html à la racine de l'appli
    app.post('/message', messages.addMessage);

    // Affiche la liste des message
    app.get('/messages', messages.listAll);

    // Affiche la liste des messages de l'auteur
    app.get('/messages/:auteur', messages.listByAuthor);
};