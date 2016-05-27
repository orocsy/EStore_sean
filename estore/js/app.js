/**
 * Created by sc578 on 5/23/16.
 */
var home = angular.module('home',['ngRoute']);
home.config(function ($routeProvider) {
        $routeProvider.when('/home',{
            redirectTo:'home.html',
            controller:'HomeCtrl'
        }).when('/auth',{
            redirectTo:'auth.html',
            controller:'AuthCtrl'
        });
});