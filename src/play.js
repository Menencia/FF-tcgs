class Play {

    constructor(game) {
        this.game = game;
        this.player = new Player('Player');
        this.player.deck = this.game.decks[0];
        for (var card of this.player.deck.cards) {
            card.setPlayer(this.player);
            card.setPlay(this);
        }

        this.computer = new Computer_1('Computer');
        for (var card of this.computer.deck.cards) {
            card.setPlayer(this.computer);
            card.setPlay(this);
        }

        this.current = this.player;
        this.opponent = this.computer;

        this.startPhase('reset');
        this.run();
    }

    /**
     *
     */
    run() {
        this.game.$timeout(() => {
            this.time--;

            if (this.time <= 0) {
                switch (this.phase) {
                    case 'reset':
                        this.current.undullCards();
                        this.startPhase('draw');
                        break;
                    case 'draw':
                        this.current.draw();
                        this.startPhase('main1', 60);
                    case 'main1':
                        this.startPhase('attack', 100);
                    case 'attack':
                        this.startPhase('main2', 60);
                    case 'main2':
                        this.startPhase('end');
                    case 'end':
                        this.startPhase('reset');
                        var [current, opponent] = [this.opponent, this.current];
                        this.current = current;
                        this.opponent = opponent;
                }
            }
            this.run();
        }, 1000);
    }

    /**
     *
     * @param phase
     * @param time
     */
    startPhase(phase, time = 0) {
        this.phase = phase;
        this.time = time;
    }

    /**
     *
     */
    endPhase() {
        this.time = 0;
    }
}