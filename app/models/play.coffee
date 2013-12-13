class Play

  constructor: (@game) ->
    @player = new Player 'Player'
    @player.deck = @game.decks[0]
    for card in @player.deck.cards
      card.setPlayer(@player)
      card.setPlay(@)

    @computer = new Computer_1 'Computer'
    for card in @computer.deck.cards 
      card.setPlayer(@computer) 
      card.setPlay(@) 
    
    @current = @player
    @opponent = @computer
    
    @startPhase 'reset'
    @run()

  run: ->
    @game.$timeout =>
      @time--

      if @time <= 0
        switch @phase
          when 'reset'
            @current.undullCards();
            @startPhase 'draw'
          when 'draw'
            @current.draw()
            @startPhase 'main1', 60
          when 'main1'
            @startPhase 'attack', 100
          when 'attack'
            @startPhase 'main2', 60
          when 'main2'
            @startPhase 'end'
          when 'end'
            @startPhase 'reset'
            [@current, @opponent] = [@opponent, @current]

      @run()
    , 1000
      
  startPhase: (@phase, @time=0) ->

  endPhase: ->
    @time = 0