const request = require('request');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const requestOptions = {
    method: 'GET',
    json: true,
};

exports.getClientDashboard = (req, res) => {
    // res.locals.user_dash = false;
    // res.render('clientDashboard', {
    //     title: 'Client1',
    //     isAuthenticated: req.oidc.isAuthenticated()
    // });

    res.locals.user_dash = false;
    request(process.env.BACKEND_URI + '/client/notes/' + req.params.clientId, requestOptions, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            // res.locals.isNotes = (body.notes.length > 0) ? true : false;
            res.render('clientDashboard', {
              title: 'Client1',
              isAuthenticated: req.oidc.isAuthenticated(),
              client: body.client,
              notes: body.notes,
              isNotes: (body.notes.length > 0) ? true : false,
              client_id: req.params.clientId
            });
        }
    });
};
