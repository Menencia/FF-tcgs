class Crystal {

    constructor(elt) {
        this.elt = elt;
        this.active = false;
    }

    /**
     *
     */
    toggle() {
        this.active = !this.active;
    }

}