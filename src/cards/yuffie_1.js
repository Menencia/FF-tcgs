class Card_Yuffie_1 extends Card {

    constructor(deck) {
        super(deck);
        this.name = 'Yuffie';
        this.cost = [{elt: "wind", nbr: 3}];
        this.position = this.POSITION_FORWARD;
        this.title = 'Ninja';
        this.serial = '1-070R';
        this.power = 6000;
        this.abilities = [
            {
                text  : "Yuffie can't be Blocked by Forwards of cost 4 or more.",
                effect: this.onBeingBlocked
            },
            {
                cost  : [
                    {elt: "special", nbr: ""},
                    {elt: "wind", nbr: 1},
                    {elt: "dull", nbr: ""}
                ],
                name  : 'Bloodfest',
                text  : 'Choose up to 3 Forwards. Distribute a total of 6000 Damage among them however you like (in increments of 1000).',
                effect: this.ability_CosmoMemory
            }
        ];
    }

    /**
     *
     */
    onBeingBlocked() {
        // todo
    }
}