class Card_Tifa_1 extends Card {

    constructor(deck) {
        super(deck);
        this.name = 'Tifa';
        this.cost = {elt: "fire", nbr: 4};
        this.position = this.POSITION_FORWARD;
        this.title = 'Brawler';
        this.serial = '1-012U';
        this.power = 9000;
        this.abilities = [
            {
                cost  : [
                    {elt: "special", nbr: 1},
                    {elt: "fire", nbr: 1},
                    {elt: "light", nbr: 1}
                ],
                name  : 'Waterkick',
                text  : "Choose 1 Forward. Dull it and deal it 6000 damage.",
                effect: this.ability_Waterkick
            }
        ];
    }

    /**
     *
     */
    ability_Waterkick() {
        // todo
    }
}