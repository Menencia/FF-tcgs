class Card_Sazh_1 extends Card {

    constructor(deck) {
        super(deck);
        this.name = 'Sazh';
        this.cost = {elt: "fire", nbr: 3};
        this.position = this.POSITION_BACKUP;
        this.title = 'Blaster';
        this.serial = '1-008U';
        this.abilities = [
            {
                cost  : [
                    {elt: "dull", nbr: ""}
                ],
                text  : "Choose 1 Forward. Deal it 2000 damage. If you summoned Brynhildr this turn, deal it 4000 damage instead. Sazh doesn't become Active during your next Active Phase.",
                effect: this.ability
            }
        ];
    }

    /**
     *
     */
    ability() {
        // todo
    }
}