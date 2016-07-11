var app = angular.module('onload', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',
    {
        controller: 'HomeController',
        templateUrl: 'templates/home.html'
    })
    .when('/about',
    {
        controller: 'HomeController',
        templateUrl: 'templates/home.html'
    })   
    .otherwise(
    {
        redirectTo: '/home'
    })
});