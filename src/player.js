class Player {

    constructor(game, name, deck) {
        // Play instance
        this.game = game;

        // build deck
        deck = new deck(this);
        deck.shuffle();

        this.name = name;
        this.deck = deck;
        this.crystals = [];
        this.hand = [];
        this.break = [];
        this.backup = [];
        this.forward = [];
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