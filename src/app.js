'use strict';

/**
 * App module
 * @type {object}
 */
var app = angular.module('ff-tcgs', ['ngRoute', 'ngCookies']);

/**
 * Game Service
 */
app.factory('Game', ['$rootScope', '$cookieStore', '$timeout', '$location',
    function ($rootScope, $cookieStore, $timeout, $location) {
        return new Game($rootScope, $cookieStore, $timeout, $location);
    }]);

/**
 * Routes logic
 */
app.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
            when('/game', {
                templateUrl: 'partials/game.html',
                controller : 'GameCtrl'
            }).
            when('/play', {
                templateUrl: 'partials/play.html',
                controller : 'PlayCtrl'
            }).
            otherwise({
                redirectTo: '/game'
            });
    }
]);

/**
 * NAV
 */

app.controller('IndexCtrl', function ($scope, $location, Game) {

    $scope.isActive = function (route) {
        return route === $location.path();
    };

});

/**
 * /Game
 */

app.controller('GameCtrl', function ($rootScope, $location, Game) {

    $rootScope.play = function () {
        Game.newPlay();
    };

    $rootScope.range = function(num) {
        return new Array(num);
    };

});

/**
 * /Play
 */

app.controller('PlayCtrl', function (Game) {

    Game.redirect();

});
