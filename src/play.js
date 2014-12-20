class Play {

    //const PLAYER_TURN = 'player';
    //const OPPONENT_TURN = 'opponent';

    constructor(game, player, opponent) {
        this.game = game;
        this.player = player;
        this.opponent = opponent;

        // const
        this.PLAYER_TURN = 'player';
        this.OPPONENT_TURN = 'opponent';

        // current turn
        this.turn = this.PLAYER_TURN;

        this.startPhase('draw');
        this.run();
    }

    /**
     *
     * @returns {*}
     */
    current() {
        return this[this.turn];
    }

    /**
     *
     * @returns {boolean}
     */
    isMe() {
        return this.turn == this.PLAYER_TURN;
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
                        this.current().undullCards();
                        this.startPhase('draw');
                        break;
                    case 'draw':
                        this.current().draw();
                        this.startPhase('main1', 60);
                        break;
                    case 'main1':
                        this.startPhase('attack', 100);
                        break;
                    case 'attack':
                        this.startPhase('main2', 60);
                        break;
                    case 'main2':
                        this.startPhase('end');
                        break;
                    case 'end':
                        this.turn = (this.PLAYER_TURN) ? this.OPPONENT_TURN : this.PLAYER_TURN;
                        this.startPhase('reset');
                        break;
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