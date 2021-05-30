const request = require('request');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const requestOptions = {
    getUserDashboard : {
        method: 'GET',
        json: {"therapistId" : 1},
    },
    postnewItem : {
        method: 'PUT'
    }
};


exports.getUserDashboard = (req, res) => {
    res.locals.user_dash = true;
    request(process.env.BACKEND_URI + '/meetings/getAll', requestOptions.getUserDashboard, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            res.render('userDashboard', {
              title: 'Your Dashboard',
              isAuthenticated: req.oidc.isAuthenticated(),
              meetData: body.schedules
            });
        }
    });
};

exports.getnewItem = (req, res) => {
    res.locals.user_dash = false;
    res.render('newItem', {
        title: 'New Meet',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.postnewItem = (req, res) => {

    req.body.therapistId = 1;
    req.body.when = req.body.when.replace(/T/g, ' ');
    req.body.duration = Number.parseInt(req.body.duration);
    requestOptions.body = req.body;
    console.log(req.body);
    request(process.env.BACKEND_URI + '/meetings/schedule', requestOptions.postnewItem, (err, response, body) => {
        if (err) { return console.log(err); }
        if (!err && response.statusCode == 200) {
            console.log(response.body);
        }
    });


    res.redirect("/dashboard");
}