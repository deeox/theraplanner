exports.getClientDashboard = (req, res) => {
    res.locals.user_dash = false;
    res.render('clientDashboard', {
        title: 'Client1',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};
