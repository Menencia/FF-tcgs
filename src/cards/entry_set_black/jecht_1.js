class Card_Jecht_1 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_FORWARD;
        this.name = 'Jecht';
        this.cost = {elt: "fire", nbr: 5};
        this.title = 'Guardian';
        this.serial = '1-011R';
        this.power = 8000;
        this.abilities = [
            {
                text  : 'Jecht gains 1000 Power for every Forward opponent control.',
                effect: this.getPower
            },
            {
                cost  : [
                    {elt: "special", nbr: 1},
                    {elt: "fire", nbr: 1},
                    {elt: "light", nbr: 2},
                    {elt: "dull", nbr: 1}
                ],
                name  : 'Ultimate Jecht Shot',
                text  : 'Choose 1 Forward. Break it.',
                effect: this.UltimateJechtShot
            }
        ];
    }

    /**
     *
     */
    getPower() {
        // todo
    }

    /**
     *
     */
    ability_UltimateJechtShot() {
        // todo
    }

}
