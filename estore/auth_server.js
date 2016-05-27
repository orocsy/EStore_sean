/**
 * Created by sc578 on 5/24/16.
 */
/**
 * Loads the necessary libraries, creates a connection to MongoDB, and starts the Express server.
 * This is the main application file
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')(expressSession);
var mongoose = require('mongoose');
require('./models/user_model');
var path = require ('path');
var conn = mongoose.connect('mongodb://orocsy_mongo:123456@ds011893.mlab.com:11893/user_sean');
var app = express();

app.engine('.html',require('ejs').__express);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret:'SECRETE',
    cookie:{maxAge:60*60*1000},
    saveUninitialized: true,
    resave: true,
    store:new mongoStore({
        mongooseConnection:mongoose.connection,
        collections:'sessions'
    })

}));
require('./routes')(app);
app.listen(3300,function () {
    console.log('listening');
});




