/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  console.log(req.oidc.user);
  
  res.locals.user_dash = false;
  res.render('home', {
    title: 'Home',
    isAuthenticated: req.oidc.isAuthenticated()
  });
};
