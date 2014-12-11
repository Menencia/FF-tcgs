"use strict";
var Player = function Player(name) {
  this.name = name;
  this.crystals = {
    fire: 0,
    aqua: 0,
    wind: 0,
    ice: 0,
    earth: 0,
    thunder: 0
  };
  this.hand = [];
  this.breaks = [];
  this.backups = [];
  this.forwards = [];
};
($traceurRuntime.createClass)(Player, {
  undullCards: function() {
    for (var $__1 = this.forwards[Symbol.iterator](),
        $__2; !($__2 = $__1.next()).done; ) {
      var card = $__2.value;
      card.undull();
    }
    for (var $__3 = this.backups[Symbol.iterator](),
        $__4; !($__4 = $__3.next()).done; ) {
      var card = $__4.value;
      card.undull();
    }
  },
  draw: function() {
    this.hand.push(this.deck.cards.shift());
  }
}, {});
