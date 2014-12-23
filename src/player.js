class Player {

    constructor(game, name) {
        // Play instance
        this.game = game;

        this.ZONE_FIELD = 'field';
        this.ZONE_DAMAGE = 'damage';
        this.ZONE_DECK = 'deck';
        this.ZONE_BREAK = 'break';
        this.ZONE_HAND = 'hand';

        this.name = name;
        this.crystals = [];
        this.hand = [];
        this.break = [];
        this.field = [];
    }

    /**
     * Build deck
     */
    prepare(deck) {
        deck = new deck(this);
        deck.shuffle();
        this.deck = deck;
    }

    /**
     *
     */
    undullCards() {
        for (var card of this.forward)
            card.undull();
        for (var card of this.backup)
            card.undull();
    }

    /**
     *
     */
    draw() {
        var card = _.last(this.deck.cards);
        card.deplaceToHand();
    }

    /**
     *
     */
    getActiveCrystals() {
        return _.where(this.crystals, {active: true});
    }
}