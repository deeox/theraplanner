exports.getUserDashboard = (req, res) => {
    res.locals.user_dash = true;
    res.render('user_dashboard', {
      title: 'Your Dash',
      isAuthenticated: req.oidc.isAuthenticated()
    });
  };