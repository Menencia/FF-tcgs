// Generated by CoffeeScript 1.6.3
/**
 * Game class
*/

var Game;

Game = (function() {
  function Game() {}

  Game._id = _.uniqueId();

  Game.prototype.init = function($rootScope, $cookieStore, $http, $timeout) {
    this.$rootScope = $rootScope;
    this.$cookieStore = $cookieStore;
    this.$http = $http;
    this.$timeout = $timeout;
    this.loaded = false;
    return this.version = 1;
  };

  Game.prototype.load = function() {
    return this._loadJSON([]);
  };

  Game.prototype._loadJSON = function(jsons) {
    var i, loader, max, n, _i, _len, _ref, _results;
    if (jsons.length === 0) {
      return this.begin();
    } else {
      n = 0;
      max = jsons[0].length;
      _ref = jsons[0];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        loader = '_load_' + jsons[0][i];
        _results.push(this[loader](function() {
          n++;
          if (n === max) {
            jsons.splice(0, 1);
            return self._loadJSON(jsons);
          }
        }));
      }
      return _results;
    }
  };

  Game.prototype.begin = function() {
    var save;
    save = this.$cookieStore.get('game');
    if (save) {

    } else {
      this.newGame();
    }
    this.loaded = true;
    return this.$rootScope.game = this;
  };

  Game.prototype.newGame = function() {
    return this.addCard('Chaos', '1-158E', 1);
  };

  Game.prototype.addCard = function(name, serial, qte) {
    return console.log(name);
  };

  Game.prototype.run = function() {
    var _this = this;
    return this.$timeout(function() {
      return _this.run();
    }, 1000);
  };

  Game.prototype["export"] = function() {
    save.time = (new Date()).toLocaleString();
    save.version = this.version;
    return save;
  };

  Game.prototype["import"] = function(save) {
    return this.$cookieStore.put('game', save);
  };

  Game.prototype.save = function() {
    var save;
    save = this["export"]();
    this.$cookieStore.put('game', save);
    this.time = save.time;
    return this.last_export = JSON.stringify(save);
  };

  Game.prototype.reset = function() {
    return this.$cookieStore.remove('game');
  };

  return Game;

})();
