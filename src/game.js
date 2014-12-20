class Game {

    constructor($rootScope, $cookieStore, $timeout, $location) {
        // angular vars
        this.$rootScope = $rootScope;
        this.$cookieStore = $cookieStore;
        this.$timeout = $timeout;
        this.$location = $location;

        // detect first load
        this.loaded = true;

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
    newPlay() {
        // deck player
        var deck = new DeckEntrySetBlack();

        // building play
        var player = new Player(this, 'Player', deck);
        var computer = new ComputerEntrySetBlack(this);
        this.play = new Play(this, player, computer);

        // redirect
        this.$location.path('/play');
    }

    /**
     *
     */
    redirect() {
       if (!this.play) {
           this.$location.path('/game');
       }
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