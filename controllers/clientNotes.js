exports.getClientNoteTaker = (req, res) => {
    res.locals.user_dash = false;
    res.render('addNotes', {
        title: 'Client1',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};

exports.postNewNote = (req, res) => {
    console.log(req.body);
    // res.end(JSON.stringify(req.body));
    res.redirect("/clientDashboard");
};