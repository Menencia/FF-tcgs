class Card

  constructor: ->
    @dulled = false

  setPlay: (@play) ->

  dull: ->
    @dulled = true

  undull: ->
    @dulled = false
