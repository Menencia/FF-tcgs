class Player

  constructor: (@name) ->
    @crystals = 
      fire: 0
      aqua: 0
      wind: 0
      ice: 0
      earth: 0
      thunder: 0
    @hand = []
    @breaks = []
    @backups = []
    @forwards = []

  undullCards: ->
    card.undull() for card in @forwards
    card.undull() for card in @backups

  draw: ->
    @hand.push @deck.cards.shift()