'use strict';

/**
 * App module
 * @type {object}
 */
var app = angular.module('ff-tcg', ['ngRoute', 'ngCookies']);

/**
 * Utils Service
 */
app.service('Utils', Utils);

/**
 * Game Service
 */
app.service('Game', Game);

/**
 * Routes logic
 */
app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
    when('/game', {
      templateUrl: 'partials/game.html',
      controller: GameCtrl
    }).
    when('/play', {
      templateUrl: 'partials/play.html',
      controller: PlayCtrl
    }).
    when('/save', {
      templateUrl: 'partials/save.html',
      controller: SaveCtrl
    }).
    otherwise({
      redirectTo: '/game'
    });
  }
]);

/**
 * NAV
 */

function NavCtrl($scope, $location, Game) {

  $scope.isActive = function(route) {
    return route === $location.path();
  }

  /**
   * Go to the game
   */
  $scope.game = function() {
    $location.path("/game");
  };

  /**
   * Save the game
   */
  $scope.save = function(ev) {
    $location.path("/save");
  };

}

/**
 * /Game
 */

function GameCtrl($rootScope, $cookieStore, $location, Game, Utils) {

  // STEP 1
  // Load saved game from COOKIE

  var save = $cookieStore.get('game');

  // STEP 2
  // Extend COOKIE with background information

  // GAME
  if (Game.loaded) {
    return;
  }

  Game.init($rootScope, $cookieStore);
  Game.load();

  $rootScope.play = function() {
    Game.newPlay();
    $location.path("/play");
  }

};

/**
 * /Play
 */

function PlayCtrl($rootScope, $location, $cookieStore, $http, $timeout, Game) {

  /**
   * Checkin'
   */
  if (!Game.loaded || Game.mode != 'play') {
    $location.path("/game");
    return;
  }

};

/**
 * /Save
 */

function SaveCtrl($scope, $rootScope, $location, Game, Utils) {

  /**
   * Checkin'
   */
  if (!Game.loaded) {
    $location.path("/game");
    return;
  }

  /**
   * Save the game
   */
  $rootScope.saveGame = function(ev) {
    Game.save();
    Utils.animate(ev, 'OK!');
  };

  /**
   * Reset the game
   */
  $rootScope.resetGame = function(ev) {
    if (confirm('Are you sure ? You\'ll lose everything !')) {
      Game.reset();
      location.reload();
    }
  };

  /**
   * Export the current save
   */
  $rootScope.exportLastSave = function(ev) {
    $scope.area = Game.last_export;
    Utils.animate(ev, 'OK!');
  };

  /**
   * Export the current game
   */
  $rootScope.exportCurrentGame = function(ev) {
    var save = Game.export();
    $scope.area = JSON.stringify(save);
    Utils.animate(ev, 'OK!');
  };

  /**
   * Import a save
   */
  $rootScope.importSave = function(ev) {
    if (!Game.last_export || confirm('Are you sure ? You\'ll lose your current save !')) {
      var save = JSON.parse($scope.area);
      Game.import(save);
      location.reload();
    }
  };

}