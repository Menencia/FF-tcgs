###*
 * Game class
###
class Game
  @_id = _.uniqueId()

  init: (@$rootScope, @$cookieStore) ->
    @loaded = false
    @version = 1
    @mode = 'normal'

    @decks = []
    @cards = []

  load : ->
    @_loadJSON []

  _loadJSON: (jsons) ->
    if jsons.length is 0
      @begin()
    else
      n = 0
      max = jsons[0].length
      for i in jsons[0]
        loader = '_load_' + jsons[0][i]
        @[loader](->
          n++
          if n is max
            jsons.splice 0, 1
            self._loadJSON jsons
        )

  begin: ->
    save = @$cookieStore.get 'game'
    if save
      # Do nothing
    else
      @newGame()

    @loaded = true;

    @$rootScope.game = @

  newGame: ->
    @cards.push new Card_Chaos(@)
    @cards.push new Card_Jecht_1(@)

    deck = new Deck(@)
    deck.add card for card in @cards
    
    @decks.push deck

  newPlay: ->
    @mode = 'play'
    @play = new Play(@)

  export: ->
    save.time = (new Date()).toLocaleString()
    save.version = @version
    save

  import: (save) ->
    @$cookieStore.put 'game', save

  save: ->
    save = @export()
    @$cookieStore.put 'game', save
    @time = save.time
    @last_export = JSON.stringify save

  reset: ->
    @$cookieStore.remove 'game'