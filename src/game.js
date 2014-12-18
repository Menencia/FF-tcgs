class Game {

    constructor($rootScope, $cookieStore, $timeout) {
        // angular vars
        this.$rootScope = $rootScope;
        this.$cookieStore = $cookieStore;
        this.$timeout = $timeout;

        // detect first load
        this.loaded = false;

        // version
        this.version = '0.1.0';

        // binding
        this.$rootScope.game = this;

        // timer
        this.timer = null;
    }

    /**
     *
     */
    newGame() {
        this.cards.push(new Card_Red_XIII_1());
        this.cards.push(new Card_Jecht_1());

        var deck = new Deck(this);
        for (var card of this.cards) {
            deck.add(card);
        }

        this.decks.push(deck);
    }

    /**
     *
     */
    newPlay() {
        this.mode = 'play';
        this.play = new Play(this);
    }

    test() {
        return "1";
    }

    /**
     *
     * @returns {save}
     */
    export() {
        save.time = (new Date()).toLocaleString();
        save.version = this.version;
        return save;
    }

    /**
     *
     * @param save
     */
    import(save) {
        this.$cookieStore.put('game', save);
    }

    /**
     *
     */
    save() {
        var save = this.export();
        this.$cookieStore.put('game', save);
        this.time = save.time;
        this.last_export = JSON.stringify(save);
    }

    /**
     *
     */
    reset() {
        this.$cookieStore.remove('game');
    }

}