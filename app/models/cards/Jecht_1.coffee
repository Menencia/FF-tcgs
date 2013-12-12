class Card_Jecht_1 extends Card

  name: 'Jecht'
  cost: fire: 5
  position: 'Forward'
  title: 'Guardian'
  serial: '1-011R'
  power: 8000
  passives: [
    {
      text: 'Jecht gains 1000 Power for every Forward opponent control.'
      effect: @getPower
    }
  ]
  skills: [
    {
      cost: {
        super: 1
        fire: 1
        dark: 2
        dull: true
      }
      name: 'Ultimate Jecht Shot',
      text: 'Choose 1 Forward. Break it.'
      effect: @UltimateJechtShot
    }
  ]

  getPower: ->
    power + @game.opponent().forwards().length * 1000;

  UltimateJechtShot: ->
    @game.choose {
        forward: 1
      }, (forward) ->
        forward.break()
