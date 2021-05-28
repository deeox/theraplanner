/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  console.log(req.oidc.user);
  res.render('home', {
    title: 'Home',
    isAuthenticated: req.oidc.isAuthenticated()
  });
};
