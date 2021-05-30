const request = require('request');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const requestOptions = {
    getclientManager : {
        method: 'GET',
        json: {"therapistId" : 1},
    },
    postnewClient : {
        method: 'PUT'
    }
};


exports.getclientManager = (req, res) => {
    res.locals.user_dash = false;
    request(process.env.BACKEND_URI + '/client/getAll', requestOptions.getclientManager, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            res.render('clientManager', {
              title: 'Client Manager',
              isAuthenticated: req.oidc.isAuthenticated(),
              clientData: body.clientList
            });
        }
    });
};

exports.getnewClient = (req, res) => {
    res.locals.user_dash = false;
    res.render('newClient', {
        title: 'New Client',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.postnewClient = (req, res) => {
    req.body.therapistId = 1;
    req.body.birthDate = req.body.birthDate.replace(/-/g, '/');
    requestOptions.body = req.body;
    console.log(req.body);
    request(process.env.BACKEND_URI + '/client/add', requestOptions.postnewClient, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            console.log(response.body);
        }
    });

    res.redirect("/clientManager");
};