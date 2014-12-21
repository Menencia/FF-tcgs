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
     * Game instance
     * @returns {game|Game.$rootScope.game|Play.game}
     */
    game() {
        return this.owner().game;
    }

    /**
     * App instance
     * @returns {app}
     */
    app() {
        return this.game().app;
    }

    /**
     * Discard a card from hand
     */
    discard() {
        _.remove(this.owner().hand, this);
        this.owner().breaks.unshift(this);

        if ($.inArray(this.cost.elt, ['light', 'dark']) == -1) {
            for (var i in [0, 2]) {
                this.owner().crystals.push(new Crystal(this.cost.elt));
            }
        }
    }

    /**
     *
     */
    canPlay() {
        var crystals = this.owner().getActiveCrystals();
        var crystal = _.find(crystals, {elt: this.cost.elt});
        return crystal && crystals.length == this.cost.nbr;
    }

    /**
     * Play a card onto the field
     */
    play() {
        // remove active crystals
        _.remove(this.owner().crystals, {active: true});

        // remove card from hand
        _.remove(this.owner().hand, this);

        // place card on field
        if (this.position == this.POSITION_FORWARD) {
            this.owner().forwards.push(this);
        }
        if (this.position == this.POSITION_BACKUP) {
            this.owner().backups.push(this);
        }
    }
}