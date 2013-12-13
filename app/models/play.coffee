class Play

  constructor: (@game) ->
    @player = new Player 'Player', @
    @player.deck = @game.decks[0]
    card.setPlay(@) for card in @player.deck.cards 


    @opponent = new Opponent1 'Computer', @
    card.setPlay(@) for card in @opponent.deck.cards 
    
    @current = @player
    
    @startPhase 'reset'
    @run()

  run: ->
    @game.$timeout =>
      @time--

      if @time <= 0
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
      
  startPhase: (@phase, @time=0) ->