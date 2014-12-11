class Card_Red_XIII_1 extends Card {

    constructor() {
        this.name = 'Red XIII';
        this.cost = [{elt: "fire", nbr: 3}];
        this.position = 'forward';
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
                    {elt: "special", nbr: ""},
                    {elt: "fire", nbr: 4},
                    {elt: "dull", nbr: ""}
                ],
                name  : 'Cosmo Memory',
                text  : 'Deal 6000 damage to all Forwards opponent controls.',
                effect: this.CosmoMemory
            }
        ];
    }

    /**
     *
     */
    onGame() {
        this.game.choose({
            forward: 1
        }, (forward) => {
            forward.power(3000)
        });
    }

    /**
     *
     * @constructor
     */
    CosmoMemory() {
        var forwards = this.game.opponent().forwards();
        for (var forward in forwards)
            forward.damage(6000);
    }
}