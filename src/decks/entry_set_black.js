class Deck_Entry_Set_Black extends Deck {

    constructor(player) {
        super(player, 'Entry Set Black');
        this.add(new Card_Jecht_1(this));
        this.add(new Card_Red_XIII_1(this));
        this.add(new Card_Bartz_1(this));
        this.add(new Card_Yuffie_1(this));
        this.add(new Card_Auron_2(this));
        this.add(new Card_Sazh_1(this));
        this.add(new Card_Sazh_1(this));
        this.add(new Card_Tifa_1(this));
        this.add(new Card_Tifa_1(this));
    }

}