exports.getUserDashboard = (req, res) => {
    res.locals.user_dash = true;
    res.render('userDashboard', {
      title: 'Your Dash',
      isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.getnewItem = (req, res) => {
    res.locals.user_dash = false;
    res.render('newItem', {
        title: 'New Item',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};