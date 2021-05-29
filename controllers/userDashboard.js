const request = require('request');
const apiOptions = {
  server: 'https://b8e655f451eb.ngrok.io'
};
const requestOptions = {
    url: 'http://yourapi.com/api/path',
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
};


exports.getUserDashboard = (req, res) => {
    res.locals.user_dash = true;

    var meetData = '';

    var req = request('http://9afff8cdce67.ngrok.io/client/getAll', { method: 'GET', json: {"therapistId" : 1} }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        meetData = body;
    });

    console.log("Hello");

    res.render('userDashboard', {
      title: 'Your Dash',
      // isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.getnewItem = (req, res) => {
    res.locals.user_dash = false;
    res.render('newItem', {
        title: 'New Item',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.postnewItem = (req, res) => {
    console.log(req.body);
    // res.end(JSON.stringify(req.body));
    res.redirect("/dashboard");
}