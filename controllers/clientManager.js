exports.getclientManager = (req, res) => {
    res.locals.user_dash = false;
    res.render('clientManager', {
        title: 'Client Manager',
        isAuthenticated: req.oidc.isAuthenticated()
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
    console.log(req.body);
    // res.end(JSON.stringify(req.body));
    res.redirect("/clientManager");
};