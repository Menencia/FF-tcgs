class Main {

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
        this.$rootScope.app = this;

        // timer
        this.timer = null;
    }

    /**
     *
     */
    newGame() {
        // building play
        this.game = new Game(this);

        // redirect
        this.$location.path('/game');
    }

    /**
     *
     */
    redirect() {
       if (!this.game) {
           this.$location.path('/home');
       }
    }

}