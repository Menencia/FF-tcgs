class Card_Auron_2 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_FORWARD;
        this.name = 'Auron';
        this.cost = {elt: "fire", nbr: 5};
        this.title = 'Guardian';
        this.serial = '1-002U';
        this.power = 9000;
        this.abilities = [
            {
                text  : "Backups you control cannot Break due to opponent's effects.",
                effect: this.onGame
            }
        ];
    }

    /**
     *
     */
    onGame() {
        // todo
    }
}