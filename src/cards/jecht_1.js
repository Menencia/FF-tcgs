class Card_Jecht_1 extends Card {

    constructor(deck) {
        super(deck);
        this.name = 'Jecht';
        this.cost = [{elt: "fire", nbr: 5}];
        this.position = this.POSITION_FORWARD;
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
                    {elt: "special", nbr: ""},
                    {elt: "fire", nbr: 1},
                    {elt: "dark", nbr: 2},
                    {elt: "dull", nbr: ""}
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
