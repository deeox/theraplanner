const request = require('request');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const requestOptions = {
    method: 'PUT',
    json: true,
};

exports.getClientNoteTaker = (req, res) => {
    res.locals.user_dash = false;
    res.render('addNotes', {
        title: 'New Note',
        isAuthenticated: req.oidc.isAuthenticated(),
        client_id: req.params.clientId
    });
};

exports.postNewNote = (req, res) => {
    console.log(req.body);
    // res.end(JSON.stringify(req.body));
    requestOptions.json = req.body;

    request(process.env.BACKEND_URI + '/client/note/' + req.params.clientId, requestOptions, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            console.log(response.body);
        }
    });

    res.redirect("/clientDashboard/"+req.params.clientId);
};