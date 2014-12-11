"use strict";
var Computer_1 = function Computer_1() {
  $traceurRuntime.superCall(this, $Computer_1.prototype, "constructor", ['Computer']);
  this.cards = [];
  this.cards.push(new Card_Red_XIII_1());
  this.cards.push(new Card_Jecht_1());
  this.deck = new Deck(this);
  for (var card in this.cards) {
    this.deck.add(card);
  }
};
var $Computer_1 = Computer_1;
($traceurRuntime.createClass)(Computer_1, {}, {}, Player);
