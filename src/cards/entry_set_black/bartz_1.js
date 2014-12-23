class Card_Bartz_1 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_FORWARD;
        this.name = 'Bartz';
        this.cost = {elt: "wind", nbr: 5};
        this.title = 'Traveler';
        this.serial = '1-067R';
        this.power = 9000;
        this.abilities = [
            {
                text  : 'When Bartz enters the Field, make all Wind element characters you control Active.',
                effect: this.onEXBurst
            }
        ];
    }

    /**
     *
     */
    onEXBurst() {
        // todo
    }
}