"use strict";
'use strict';
var app = angular.module('ff-tcg', ['ngRoute', 'ngCookies']);
app.service('Utils', Utils);
app.service('Game', Game);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'partials/game.html',
    controller: GameCtrl
  }).when('/play', {
    templateUrl: 'partials/play.html',
    controller: PlayCtrl
  }).when('/save', {
    templateUrl: 'partials/save.html',
    controller: SaveCtrl
  }).otherwise({redirectTo: '/game'});
}]);
function NavCtrl($scope, $location, Game) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };
  $scope.game = function() {
    $location.path("/game");
  };
  $scope.save = function(ev) {
    $location.path("/save");
  };
}
function GameCtrl($rootScope, $cookieStore, $timeout, $location, Game, Utils) {
  var save = $cookieStore.get('game');
  if (Game.loaded) {
    return;
  }
  Game.init($rootScope, $cookieStore, $timeout);
  $rootScope.play = function() {
    Game.newPlay();
    $location.path("/play");
  };
}
;
function PlayCtrl($rootScope, $location, $cookieStore, $http, $timeout, Game) {
  if (!Game.loaded || Game.mode != 'play') {
    $location.path("/game");
    return;
  }
}
;
function SaveCtrl($scope, $rootScope, $location, Game, Utils) {
  if (!Game.loaded) {
    $location.path("/game");
    return;
  }
  $rootScope.saveGame = function(ev) {
    Game.save();
    Utils.animate(ev, 'OK!');
  };
  $rootScope.resetGame = function(ev) {
    if (confirm('Are you sure ? You\'ll lose everything !')) {
      Game.reset();
      location.reload();
    }
  };
  $rootScope.exportLastSave = function(ev) {
    $scope.area = Game.last_export;
    Utils.animate(ev, 'OK!');
  };
  $rootScope.exportCurrentGame = function(ev) {
    var save = Game.export();
    $scope.area = JSON.stringify(save);
    Utils.animate(ev, 'OK!');
  };
  $rootScope.importSave = function(ev) {
    if (!Game.last_export || confirm('Are you sure ? You\'ll lose your current save !')) {
      var save = JSON.parse($scope.area);
      Game.import(save);
      location.reload();
    }
  };
}
