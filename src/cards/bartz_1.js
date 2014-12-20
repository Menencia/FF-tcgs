class Card_Bartz_1 extends Card {

    constructor(deck) {
        super(deck);
        this.name = 'Bartz';
        this.cost = [{elt: "wind", nbr: 5}];
        this.position = this.POSITION_FORWARD;
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