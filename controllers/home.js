/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    isAuthenticated: req.oidc.isAuthenticated()
  });
};
