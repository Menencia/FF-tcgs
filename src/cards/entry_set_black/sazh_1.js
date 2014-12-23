class Card_Sazh_1 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_BACKUP;
        this.name = 'Sazh';
        this.cost = {elt: "fire", nbr: 3};
        this.title = 'Blaster';
        this.serial = '1-008U';
        this.abilities = [
            {
                cost  : [
                    {elt: "dull", nbr: 1}
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