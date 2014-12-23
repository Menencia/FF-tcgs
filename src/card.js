class Card {

    constructor(deck) {
        this.deck = deck;
        this.dulled = false;

        this.GROUP_TYPE_CHARACTER = 'character';
        this.GROUP_TYPE_SUMMON = 'summon';
        this.GROUP_TYPE_ITEM = 'item';

        this.CARD_TYPE_FORWARD = 'forward';
        this.CARD_TYPE_BACKUP = 'backup';
        this.CARD_TYPE_MONSTER = 'monster';
        this.CARD_TYPE_WEAPON = 'weapon';
        this.CARD_TYPE_ARMOR = 'armor';
        this.CARD_TYPE_ACCESSORY = 'accessory';

        this.zone = this.owner().ZONE_DECK;
    }

    /**
     *
     */
    dull() {
        this.dulled = true;
    }

    /**
     *
     */
    undull() {
        this.dulled = false;
    }

    /**
     * Owner of the card
     * @returns {owner}
     */
    owner() {
        return this.deck.owner;
    }

    /**
     * Game instance
     * @returns {game|Player.game|Game.game}
     */
    game() {
        return this.owner().game;
    }

    /**
     * Move a card to a new zone
     */
    deplace(zone) {

        // remove from current zone
        var list;

        if (this.zone == this.owner().ZONE_DECK) {
            list = this.owner()[this.zone].cards;
        } else {
            list = this.owner()[this.zone];
        }

        _.remove(list, this);

        // add to new zone
        this.owner()[zone].push(this);
        this.zone = zone;
    }

    /**
     * Move a card to the hand
     */
    deplaceToHand() {
        this.deplace(this.owner().ZONE_HAND);
    }

    /**
     * App instance
     * @returns {app}
     */
    app() {
        return this.game().app;
    }

    /**
     *
     */
    canDiscard() {
        var inPhase = $.inArray(this.game().phase, [this.game().PHASE_MAIN_1, this.game().PHASE_MAIN_2]) > -1;
        var inHand = (this.zone == this.owner().ZONE_HAND);
        return inPhase && inHand;
    }

    /**
     * Discard a card from hand
     */
    discard() {
        this.deplace(this.owner().ZONE_BREAK);

        if ($.inArray(this.cost.elt, ['light', 'dark']) == -1) {
            for (var i in [0, 2]) {
                this.owner().crystals.push(new Crystal(this.cost.elt));
            }
        }
    }

    /**
     *
     */
    canPlay() {
        var crystals = this.owner().getActiveCrystals();
        var crystal = _.find(crystals, {elt: this.cost.elt});
        return crystal && crystals.length == this.cost.nbr;
    }

    /**
     * Play a card onto the field
     */
    play() {
        // remove active crystals
        _.remove(this.owner().crystals, {active: true});

        // remove card from hand
        this.deplace(this.owner().ZONE_FIELD);
    }

    /**
     * Only backup can dull
     */
    canSupport() {
        var zone = this.zone == this.owner.ZONE_FIELD;
        var cardType = this.cartType == this.CARD_TYPE_BACKUP;
        var dulled = this.dulled;
        return zone && cardType && !dulled;
    }

    /**
     * Backup can dull to produce a crystal
     */
    support() {
        this.owner().crystals.push(new Crystal(this.cost.elt));
        this.dull();
    }
}