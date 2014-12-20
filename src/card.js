class Card {

    constructor(deck) {
        this.deck = deck;
        this.dulled = false;

        this.POSITION_FORWARD = 'forward';
        this.POSITION_BACKUP = 'backup';
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
     * Owner of the card
     * @returns {owner}
     */
    owner() {
        return this.deck.owner;
    }

    /**
     * Play instance
     * @returns {play|Function|$rootScope.play}
     */
    play() {
        return this.owner().play;
    }

    /**
     * Game instance
     * @returns {game|Game.$rootScope.game|Play.game}
     */
    game() {
        return this.play().game;
    }

    /**
     * Discard a card from hand
     */
    discard() {
        this.owner().hand = _.remove(this.owner.hand, this);
        this.owner().breaks.unshift(this);

        if ($.inArray(this.cost[0].elt, ['light', 'dark']) == -1) {
            this.owner().crystals[this.cost[0].elt] += 2;
        }
    }
}