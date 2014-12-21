'use strict';

/**
 * App module
 * @type {object}
 */
var app = angular.module('ff-tcgs', ['ngRoute', 'ngCookies']);

/**
 * Game Service
 */
app.factory('Main', ['$rootScope', '$cookieStore', '$timeout', '$location',
    function ($rootScope, $cookieStore, $timeout, $location) {
        return new Main($rootScope, $cookieStore, $timeout, $location);
    }]);

/**
 * Routes logic
 */
app.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller : 'HomeCtrl'
            }).
            when('/game', {
                templateUrl: 'partials/game.html',
                controller : 'GameCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);

/**
 * NAV
 */

app.controller('IndexCtrl', function ($scope, $location, Main) {

    $scope.isActive = function (route) {
        return route === $location.path();
    };

});

/**
 * /Game
 */

app.controller('HomeCtrl', function ($rootScope, $location, Main) {

    $rootScope.range = function(num) {
        return new Array(num);
    };

});

/**
 * /Play
 */

app.controller('GameCtrl', function (Main) {

    Main.redirect();

});
