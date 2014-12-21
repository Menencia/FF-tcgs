class Card {

    constructor(deck) {
        this.deck = deck;
        this.dulled = false;

        this.POSITION_FORWARD = 'forward';
        this.POSITION_BACKUP = 'backup';

        this.PLACE_DECK = 'deck';
        this.PLACE_HAND = 'hand';
        this.PLACE_BREAK = 'break';
        this.PLACE_BACKUP = 'backup';
        this.PLACE_FORWARD = 'forward';

        this.place = this.PLACE_DECK;
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
     * @returns {game|Player.game|Game.game}
     */
    game() {
        return this.owner().game;
    }

    /**
     * Move a card to a new place
     */
    deplace(place) {
        var list;

        if (this.place == 'deck') {
            list = this.owner()[this.place].cards;
        } else {
            list = this.owner()[this.place];
        }

        _.remove(list, this);
        this.owner()[place].push(this);
        this.place = place;
    }

    /**
     * Move a card to the hand
     */
    deplaceToHand() {
        this.deplace(this.PLACE_HAND);
    }

    /**
     * App instance
     * @returns {app}
     */
    app() {
        return this.game().app;
    }

    /**
     *
     */
    canDiscard() {
        var inPhase = $.inArray(this.game().phase, [this.game().PHASE_MAIN_1, this.game().PHASE_MAIN_2]) > -1;
        var inHand = (this.place == this.PLACE_HAND);
        return inPhase && inHand;
    }

    /**
     * Discard a card from hand
     */
    discard() {
        this.deplace(this.PLACE_BREAK);

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
        this.deplace(this.position);
    }
}