class Deck {

    constructor(name) {
        this.name = name;
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