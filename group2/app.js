var express = require('express');
var app = express();

var contacts = [ {"name": "Aide Gemmell", "tel": "601602603"},
        {"name": "Reiko Fite", "tel": "601602604"},
        {"name": "Madelyn Candler", "tel": "606372401"},
        {"name": "Kristina Dublin", "tel": "602782941"},
        {"name": "Kymberly Mak", "tel": "603111222"},
        {"name": "Merlin Stuber", "tel": "604234876"},
        {"name": "Sharita Obannon", "tel": "605829323"},
        {"name": "Andy Ensey", "tel": "608372845"},
        {"name": "Beatriz Durkee", "tel": "700123123"},
        {"name": "Elissa Bertrand", "tel": "604983782"}];

app.use(express.static(__dirname + '/public'));

app.get('/contacts', function(req, res){
    var nameFilter = req.query.name;
    var telFilter = req.query.tel;

    function nameMatches(contact) {
        return contact.name.toLowerCase().indexOf(nameFilter.toLowerCase()) != -1;
    }

    function telMatches(contact) {
        return contact.tel.indexOf(telFilter) != -1;
    }

    var filteredContacts = contacts.filter(nameMatches).filter(telMatches);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(filteredContacts));
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
