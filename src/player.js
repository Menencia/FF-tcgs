class Player {

    constructor(game, name, deck) {
        this.name = name;
        this.deck = deck;
        this.crystals = {
            fire   : 0,
            aqua   : 0,
            wind   : 0,
            ice    : 0,
            earth  : 0,
            thunder: 0
        };
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
}