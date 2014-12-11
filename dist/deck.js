"use strict";
var Deck = function Deck() {
  this.name = 'Default';
  this.cards = [];
};
($traceurRuntime.createClass)(Deck, {add: function(card) {
    this.cards.push(card);
  }}, {});
