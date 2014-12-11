class Computer_1 extends Player {

    constructor() {
        super('Computer');

        this.cards = [];
        this.cards.push(new Card_Red_XIII_1());
        this.cards.push(new Card_Jecht_1());

        this.deck = new Deck(this);
        for (var card in this.cards) {
            this.deck.add(card);
        }
    }
}