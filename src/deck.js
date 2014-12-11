class Deck {

    constructor() {
        this.name = 'Default';
        this.cards = [];
    }

    /**
     *
     * @param card
     */
    add(card) {
        this.cards.push(card);
    }
}