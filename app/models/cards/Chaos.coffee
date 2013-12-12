class Card_Chaos extends Card

  name: 'Red XIII'
  cost: fire: 3
  position: 'forward'
  title: 'Warrior'
  serial: '1-023R'
  power: 7000
  passives: [
    {
      text: 'When Red XIII enters the Field, choose 1 Forward. Increase its Power by 3000 until the end of the turn.'
      effect: @onGame
    }
  ]
  skills: [
    {
      cost: {
        super: 1
        fire: 4
        dull: true
      }
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
