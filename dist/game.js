"use strict";
var Game = function Game() {
  this.id = _.uniqueId();
  this.loaded = false;
  this.version = 1;
  this.mode = 'normal';
  this.decks = [];
  this.cards = [];
};
($traceurRuntime.createClass)(Game, {
  init: function($rootScope, $cookieStore, $timeout) {
    this.$rootScope = $rootScope;
    this.$cookieStore = $cookieStore;
    this.$timeout = $timeout;
    var save = this.$cookieStore.get('game');
    if (save) {} else {
      this.newGame();
    }
    this.loaded = true;
    this.$rootScope.game = this;
  },
  newGame: function() {
    this.cards.push(new Card_Red_XIII_1());
    this.cards.push(new Card_Jecht_1());
    var deck = new Deck(this);
    for (var $__1 = this.cards[Symbol.iterator](),
        $__2; !($__2 = $__1.next()).done; ) {
      var card = $__2.value;
      {
        deck.add(card);
      }
    }
    this.decks.push(deck);
  },
  newPlay: function() {
    this.mode = 'play';
    this.play = new Play(this);
  },
  export: function() {
    save.time = (new Date()).toLocaleString();
    save.version = this.version;
    return save;
  },
  import: function(save) {
    this.$cookieStore.put('game', save);
  },
  save: function() {
    var save = this.export();
    this.$cookieStore.put('game', save);
    this.time = save.time;
    this.last_export = JSON.stringify(save);
  },
  reset: function() {
    this.$cookieStore.remove('game');
  }
}, {});
