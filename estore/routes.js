/**
 * Created by sc578 on 5/24/16.
 */
/**
 * Defines the routes for the Express server. This file handles functionality that does not apply to the database
 *
 */
var crypto = require('crypto');
var express = require('express');
module.exports = function (app) {
    var users = require('./controllers/users_controller.js');
    app.use('/static',express.static('./static')).use('/lib',express.static('./lib'));

    app.get('/',function (req,res) {

            if(req.session.user){
                res.render('home',{
                    username: req.session.username,
                    msg:req.session.msg
                });
            }else{
                req.session.msg = 'Access Denied';
                res.redirect('/auth');
            }

    });
    
    app.get('/auth',function (req,res) {
       if(req.session.user){
           res.redirect('/');
       }
        res.render('auth',{msg:req.session.msg});
    });
    app.get('/nav',function (req,res) {
       res.render('nav');
    });
    
    app.get('/user',function (req,res) {
        if(req.session.user){
            res.render('user',{msg:req.session.msg});
        }else{
            req.session.msg = 'Access Denied';
            res.redirect('/auth');
        }
    });

    // app.get('/signup',function (req,res) {
    //     if(req.session.user){
    //         res.redirect('/');
    //     }
    //     res.render('auth',{msg:req.session.msg});
    // });
    //
    // app.get('/login',function (req,res) {
    //     if(req.session.user){
    //         res.redirectTo('/');
    //     }
    //     res.render('auth',{msg:req.session.msg});
    // });

    app.get('/logout',function (req,res) {
        req.session.destroy(function () {
            res.redirect('/auth');
        });
    });

    app.post('/auth/login',users.login);
    app.post('/auth/signup',users.signup);
    // app.post('/auth',users.auth);
    app.post('/user/update',users.updateUser);
    app.post('/user/delete',users.deleteUser);
    app.post('/user/profile',users.getUserProfile);

}
