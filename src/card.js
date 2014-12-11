class Card {

    constructor() {
        this.dulled = false;
    }

    /**
     *
     * @param player
     */
    setPlayer(player) {
        this.player = player;
    }

    /**
     *
     * @param play
     */
    setPlay(play) {
        this.play = play;
    }

    /**
     *
     */
    dull() {
        this.dulled = true;
    }

    /**
     *
     */
    undull() {
        this.dulled = false;
    }

    /**
     *
     */
    discard() {
        this.player.hand = _.remove(this.player.hand, this);
        this.player.breaks.unshift(this);

        if (this.cost[0].elt > ['light', 'dark']) {
            this.player.crystals[this.cost[0].elt] += 2;
        }
    }
}