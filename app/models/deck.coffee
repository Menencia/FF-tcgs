class Deck

  constructor: ->
    @name = 'Default'
    @cards = []

  add: (card) ->
    @cards.push card