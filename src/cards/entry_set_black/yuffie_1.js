class Card_Yuffie_1 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_FORWARD;
        this.name = 'Yuffie';
        this.cost = {elt: "wind", nbr: 3};
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
                    {elt: "special", nbr: 1},
                    {elt: "wind", nbr: 1},
                    {elt: "dull", nbr: 1}
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