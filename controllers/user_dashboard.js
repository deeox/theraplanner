exports.getUserDashboard = (req, res) => {
    res.locals.user_dash = true;
    res.render('user_dashboard', {
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