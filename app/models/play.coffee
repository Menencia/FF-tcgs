class Play

  constructor: (@game) ->
    @player = new Player(@)
    @player.deck = @game.decks[0]
    @opponent = new Opponent1(@)
    @current = @player
    
    @startPhase 'reset'
    @run()

  run: ->
    @game.$timeout =>
      @count++

      if @count >= @countLimit
        switch @phase
          when 'reset'
            @current.undullCards();
            @startPhase 'draw', 0
          when 'draw'
            @current.draw()
            @startPhase 'main1', 60
          when 'main1'
            @startPhase 'attack', 100
          when 'attack'
            @startPhase 'main2', 60
          when 'main2'
            @startPhase 'end', 0
          when 'end'
            @startPhase 'waiting', -1
            @current.finishTurn()

      @run()
    , 1000
      
  startPhase: (@phase, time=0) ->
    @count = 0
    @countLimit = time