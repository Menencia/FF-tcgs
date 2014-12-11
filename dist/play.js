"use strict";
var Play = function Play(game) {
  this.game = game;
  this.player = new Player('Player');
  this.player.deck = this.game.decks[0];
  for (var $__2 = this.player.deck.cards[Symbol.iterator](),
      $__3; !($__3 = $__2.next()).done; ) {
    var card = $__3.value;
    {
      card.setPlayer(this.player);
      card.setPlay(this);
    }
  }
  this.computer = new Computer_1('Computer');
  for (var $__4 = this.computer.deck.cards[Symbol.iterator](),
      $__5; !($__5 = $__4.next()).done; ) {
    var card = $__5.value;
    {
      card.setPlayer(this.computer);
      card.setPlay(this);
    }
  }
  this.current = this.player;
  this.opponent = this.computer;
  this.startPhase('reset');
  this.run();
};
($traceurRuntime.createClass)(Play, {
  run: function() {
    var $__0 = this;
    this.game.$timeout((function() {
      $__0.time--;
      if ($__0.time <= 0) {
        switch ($__0.phase) {
          case 'reset':
            $__0.current.undullCards();
            $__0.startPhase('draw');
            break;
          case 'draw':
            $__0.current.draw();
            $__0.startPhase('main1', 60);
          case 'main1':
            $__0.startPhase('attack', 100);
          case 'attack':
            $__0.startPhase('main2', 60);
          case 'main2':
            $__0.startPhase('end');
          case 'end':
            $__0.startPhase('reset');
            var $__6 = [$__0.opponent, $__0.current],
                current = $__6[0],
                opponent = $__6[1];
            $__0.current = current;
            $__0.opponent = opponent;
        }
      }
      $__0.run();
    }), 1000);
  },
  startPhase: function(phase) {
    var time = arguments[1] !== (void 0) ? arguments[1] : 0;
    this.phase = phase;
    this.time = time;
  },
  endPhase: function() {
    this.time = 0;
  }
}, {});
