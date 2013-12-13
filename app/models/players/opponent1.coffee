class Opponent1 extends Player

  constructor: ->
    @cards = []
    @cards.push new Card_Red_XIII_1(@)
    @cards.push new Card_Jecht_1(@)

    @deck = new Deck(@)
    @deck.add card for card in @cards