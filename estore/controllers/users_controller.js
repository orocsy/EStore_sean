/**
 * Created by sc578 on 5/24/16.
 */
/**
 * Defines the functionality for the routes that require interaction with the MongoDB database model,
 * including adding, retrieving, and deleting user objects
 */
var crypto = require('crypto');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function hashPWD(pwd) {
    return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

// exports.auth = function (req,res) {
//
// };

exports.signup = function (req,res) {
    var user = new User({username:req.body.username});
    user.set({hashed_password:hashPWD(req.body.password)});
    user.set({email:req.body.email});

    user.save(function (err) {
        if(err){
            req.session.error = err;
            res.redirect('/auth');
        }else{
            req.session.user = user.id;
            req.session.username = user.username;
            req.session.msg = 'Authenticated as' + user.username;
            res.redirect('/');
        }
    });
};

exports.login = function (req,res) {
    User.findOne({username:req.body.username}).exec(function (err,user) {
        if(!user){
            err = 'User Not Found';
        }else if(user.hashed_password === hashPWD(req.body.password.toString())){
            req.session.regenerate(function () {
                req.session.user = user;
                req.session.id = user.id;
                req.session.username = user.username;
                req.session.msg = 'Authenticated as ' + user.username;
                console.log(req.session.username);
                res.redirect('/');
            });
        }else{
            err = 'Authenticate Failed';
        }
        if(err){
            req.session.regenerate(function () {
                req.session.msg = err;
                res.redirect('/auth');
            });
        }
    });
};

exports.getUserProfile = function (req,res) {
    User.findOne({_id:req.session.user})
        .exec(function (err,user) {
            if(!user){
                res.json(404,{err:'User not found'});
            }else{
                res.json(user);
            }
        });
};

exports.updateUser = function (req,res) {
    User.findOne({_id:req.session.user}).exec(function (err,user) {
        user.set('email',req.body.email);
        user.set('color',req.body.color);
        user.save(function (err) {
            if(err){
                res.session.error = err;
            }else{
                req.session.msg = 'User Updated';
            }
            res.redirect('/user');
        });
    });
};

exports.deleteUser = function (req,res) {
    User.findOne({_id:req.session.user}).exec(function (err,user) {
        if(user){
            user.remove(function (err) {
                if(err){
                    req.session.msg = err;
                }
                req.session.destroy(function () {
                    res.redirect('/login');
                });
            });
        }else{
            req.session.msg = 'User Not Found';
            res.session.destroy(function () {
                res.redirect('/login');
            });
        }

    });
};



