class Card_Red_XIII_1 extends Card {

    constructor(deck) {
        super(deck);
        this.groupType = this.GROUP_TYPE_CHARACTER;
        this.cardType = this.CARD_TYPE_FORWARD;
        this.name = 'Red XIII';
        this.cost = {elt: "fire", nbr: 3};
        this.title = 'Warrior';
        this.serial = '1-023R';
        this.power = 7000;
        this.abilities = [
            {
                text  : 'When Red XIII enters the Field, choose 1 Forward. Increase its Power by 3000 until the end of the turn.',
                effect: this.onGame
            },
            {
                cost  : [
                    {elt: "special", nbr: 1},
                    {elt: "fire", nbr: 4},
                    {elt: "dull", nbr: 1}
                ],
                name  : 'Cosmo Memory',
                text  : 'Deal 6000 damage to all Forwards opponent controls.',
                effect: this.ability_CosmoMemory
            }
        ];
    }

    /**
     *
     */
    onGame() {
        // todo
    }

    /**
     *
     */
    ability_CosmoMemory() {
        // todo
    }
}