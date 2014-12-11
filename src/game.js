class Game {

    constructor() {
        this.id = _.uniqueId();
        this.loaded = false;
        this.version = 1;
        this.mode = 'normal';

        this.decks = [];
        this.cards = [];
    }

    /**
     *
     * @param $rootScope
     * @param $cookieStore
     * @param $timeout
     */
    init($rootScope, $cookieStore, $timeout) {
        this.$rootScope = $rootScope;
        this.$cookieStore = $cookieStore;
        this.$timeout = $timeout;
        var save = this.$cookieStore.get('game');
        if (save) {
            // Do nothing
        } else {
            this.newGame();
        }

        this.loaded = true;

        this.$rootScope.game = this;
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