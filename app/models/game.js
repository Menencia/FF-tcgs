// Generated by CoffeeScript 1.6.3
/**
 * Game class
*/

var Game;

Game = (function() {
  function Game() {}

  Game._id = _.uniqueId();

  Game.prototype.init = function($rootScope, $cookieStore, $timeout) {
    this.$rootScope = $rootScope;
    this.$cookieStore = $cookieStore;
    this.$timeout = $timeout;
    this.loaded = false;
    this.version = 1;
    this.mode = 'normal';
    this.decks = [];
    return this.cards = [];
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
    var card, deck, _i, _len, _ref;
    this.cards.push(new Card_Chaos(this));
    this.cards.push(new Card_Jecht_1(this));
    deck = new Deck(this);
    _ref = this.cards;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      card = _ref[_i];
      deck.add(card);
    }
    return this.decks.push(deck);
  };

  Game.prototype.newPlay = function() {
    this.mode = 'play';
    return this.play = new Play(this);
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
