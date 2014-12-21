class Player {

    constructor(game, name, deck) {
        // Play instance
        this.game = game;

        // build deck
        deck = new deck(this);

        this.name = name;
        this.deck = deck;
        this.crystals = [];
        this.hand = [];
        this.breaks = [];
        this.backups = [];
        this.forwards = [];
    }

    /**
     *
     */
    undullCards() {
        for (var card of this.forwards)
            card.undull();
        for (var card of this.backups)
            card.undull();
    }

    /**
     *
     */
    draw() {
        this.hand.push(this.deck.cards.shift());
    }

    /**
     *
     */
    getActiveCrystals() {
        return _.where(this.crystals, {active: true});
    }
}