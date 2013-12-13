class Card

  constructor: ->
    @dulled = false

  setPlayer: (@player) ->

  setPlay: (@play) ->

  dull: ->
    @dulled = true

  undull: ->
    @dulled = false

  discard: ->
    @player.hand = _.without(@player.hand, @);
    @player.breaks.unshift @
    
    if @cost[0].elt not in ['light','dark']
      @player.crystals[@cost[0].elt] += 2