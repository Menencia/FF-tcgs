class Player

  constructor: ->
    @hand = []
    @backups = []
    @forwards = []

  undullCards: ->
    card.undull() for card in @forwards
    card.undull() for card in @backups

  draw: ->
    @hand.push @deck.cards.shift()