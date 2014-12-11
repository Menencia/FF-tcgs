"use strict";
var Card = function Card() {
  this.dulled = false;
};
($traceurRuntime.createClass)(Card, {
  setPlayer: function(player) {
    this.player = player;
  },
  setPlay: function(play) {
    this.play = play;
  },
  dull: function() {
    this.dulled = true;
  },
  undull: function() {
    this.dulled = false;
  },
  discard: function() {
    this.player.hand = _.remove(this.player.hand, this);
    this.player.breaks.unshift(this);
    if (this.cost[0].elt > ['light', 'dark']) {
      this.player.crystals[this.cost[0].elt] += 2;
    }
  }
}, {});
