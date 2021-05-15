const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// INITIALIZATIONS
const app = express();
require('./database');

// SETTINGS 
app.set('port', process.env.PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// MIDDLEWARES 
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));

// GLOBAL VARIABLES

// ROUTES
app.use(require("./routes/index"));
app.use(require("./routes/access"));

// STATIC ROUTES 
app.use(express.static(path.join(__dirname, 'public')));

// SERVER EMISSION
app.listen(app.get('port'), () => {
    console.log('SERVER EMISSION START', app.get('port'));
});