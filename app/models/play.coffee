class Play

  constructor: (@game) ->
    @player = new Player(@)
    @player.deck = @game.decks[0]
    @opponent = new Opponent1(@)

  run: ->
    @game.$timeout =>
      # Operations here
      @run()
    , 1000