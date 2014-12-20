class Deck_Entry_Set_Black extends Deck {

    constructor(player) {
        super(player, 'Entry Set Black');
        this.add(new Card_Jecht_1(this));
        this.add(new Card_Red_XIII_1(this));
    }

}