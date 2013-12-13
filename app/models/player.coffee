class Player

  constructor: (@name, @play) ->
    @crystals = 
      fire: 0
      aqua: 0
      wind: 0
    @hand = []
    @backups = []
    @forwards = []

  undullCards: ->
    card.undull() for card in @forwards
    card.undull() for card in @backups

  draw: ->
    @hand.push @deck.cards.shift()