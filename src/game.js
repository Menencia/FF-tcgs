class Game {

    constructor(game) {
        this.game = game;

        this.player = new Player_Menencia(this);
        this.player.prepare(Deck_Entry_Set_Black);

        this.opponent = new Computer_Entry_Set_Black(this);
        this.opponent.prepare(Deck_Entry_Set_Black);

        this.stack = new Stack(this);

        // const
        this.TURN_PLAYER = 'player';
        this.TURN_OPPONENT = 'opponent';

        this.PHASE_DRAW = 'draw';
        this.PHASE_MAIN_1 = 'main1';
        this.PHASE_ATTACK = 'attack';
        this.PHASE_MAIN_2 = 'main2';
        this.PHASE_END = 'main2';
        this.PHASE_RESET = 'main2';

        // current turn
        this.turn = this.TURN_PLAYER;

        // draw 5 cards each one
        this.player.draw();
        this.player.draw();
        this.player.draw();
        this.player.draw();
        this.player.draw();

        this.startPhase(this.PHASE_DRAW);
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
        return this.turn == this.TURN_PLAYER;
    }

    /**
     *
     */
    run() {
        this.game.$timeout(() => {
            this.time--;

            if (this.time <= 0) {
                switch (this.phase) {
                    case this.PHASE_RESET:
                        this.current().undullCards();
                        this.startPhase(this.PHASE_DRAW);
                        break;
                    case this.PHASE_DRAW:
                        this.current().draw();
                        this.startPhase(this.PHASE_MAIN_1, 60);
                        break;
                    case this.PHASE_MAIN_1:
                        this.startPhase(this.PHASE_ATTACK, 100);
                        break;
                    case this.PHASE_ATTACK:
                        this.startPhase(this.PHASE_MAIN_2, 60);
                        break;
                    case this.PHASE_MAIN_2:
                        this.startPhase(this.PHASE_END);
                        break;
                    case this.PHASE_END:
                        this.turn = (this.TURN_PLAYER) ? this.TURN_OPPONENT : this.TURN_PLAYER;
                        this.startPhase(this.PHASE_RESET);
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