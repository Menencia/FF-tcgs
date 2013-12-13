class Card_Red_XIII_1 extends Card

  name: 'Red XIII'
  cost: [{elt: "fire", nbr: 3}]
  position: 'forward'
  title: 'Warrior'
  serial: '1-023R'
  power: 7000
  abilities: [
    {
      text: 'When Red XIII enters the Field, choose 1 Forward. Increase its Power by 3000 until the end of the turn.'
      effect: @onGame
    },
    {
      cost: [
        {elt: "special", nbr: ""},
        {elt: "fire", nbr: 4},
        {elt: "dull", nbr: ""}
      ]
      name: 'Cosmo Memory',
      text: 'Deal 6000 damage to all Forwards opponent controls.'
      effect: @CosmoMemory
    }
  ]

  onGame: ->
    @game.choose {
        forward: 1
      }, (forward) ->
        forward.power 3000

  CosmoMemory: ->
    forwards = @game.opponent().forwards()
    forward.damage 6000 for forward in forwards
