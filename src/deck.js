class Deck {

    constructor(owner, name) {
        this.owner = owner;
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

    /**
     * Mix the cards
     */
    shuffle() {
        _.shuffle(this.cards);
    }
}