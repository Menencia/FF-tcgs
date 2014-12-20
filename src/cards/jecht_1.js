class Card_Jecht_1 extends Card {

    constructor() {
        this.name = 'Jecht';
        this.cost = [{elt: "fire", nbr: 5}];
        this.position = 'Forward';
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
     * @returns {*}
     */
    getPower() {
        return this.power + this.game.opponent().forwards().length * 1000;
    }

    /**
     *
     * @constructor
     */
    UltimateJechtShot() {
        this.game.choose({
            forward: 1
        }, (forward) =>
            forward.break());
    }

}
