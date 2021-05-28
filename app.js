const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const chalk = require('chalk');
const sass = require('node-sass-middleware');
const flash = require('express-flash');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const dotenv = require('dotenv');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

dotenv.config({ path: '.env' });
// dotenv.load();

const homeController = require('./controllers/home');
const userDashboardController = require('./controllers/user_dashboard');




const app = express();

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "hackon",
  cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
}));

app.use('/', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/chart.js/dist'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));

app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true
};

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.get('/', homeController.index);
app.get('/dashboard', requiresAuth(), userDashboardController.getUserDashboard);
// app.get('/dashboard/meeting/{}{}', homeController.index);


app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;