var AM = new AssetManager();

function CardDataBase() {
    //initial deck
    this.width = 350;   //250 then 300 
    this.height = 457;  //327 then 392
    this.cards = [
    {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Fireball',
        type: 'damage',
        value: 1000,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 10 damage.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'Ice Darts',
        type: 'damage',
        value: 30,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 30 damage.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'Blink',
        type: 'block',
        value: 7,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 7 block.',
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    },{
        name: 'Polymorph',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 0,
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun enemy for 1 \nturn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/polymorph-card.png")

    }, {
        name: 'Frost Nova',
        type: 'debuff',
        typeOfDebuff: 'stun all',
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun all enemies for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/frost_nova-card.png")
    
    }, {
        name: 'Ice Block',
        type: 'immunity',
        drawback: 'stun self',
        durationOfImmunity: '1',
        durationOfDrawback: '1',
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain Immunity for \n1 turn. \nYou are stunned for \n1 turn.',


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice_block-card.png")

    },{
        name: 'Silence',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 7,
        width: this.width,
        height: this.height,
        duration: 2,
        mana: 1,
        text: 'If an enemy is buffing\n Stun them for 2 turns.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/counterspell-card.png")

    },{
        name: 'Time Warp',
        type: 'buff',
        typeofbuff: 'gain extra turn',
        value: 1,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain an extra turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/time_warp-card.png")

    }, {
        name: 'Arcane Intellect',
        type: 'card draw',
        drawback: 'none',
        value: 2,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Add 2 cards to \nyour hand.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    } , {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }]


    //potential cards as reward
    this.cards_rewards =[
    {
        name: 'Heal',
        type: 'heal',
        value: 15,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 15 health.',
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Fireball',
        type: 'damage',
        value: 1000,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 10 damage.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'Ice Darts',
        type: 'damage',
        value: 30,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 30 damage.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'Frost Nova',
        type: 'debuff',
        typeOfDebuff: 'stun all',
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun all enemies for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/frost_nova-card.png")

    }, {
        name: 'Blink',
        type: 'block',
        value: 7,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 7 block.',
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    }, {
        name: 'Polymorph',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 0,
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun an enemy for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/polymorph-card.png")

    }, {
        name: 'Conjure Refreshment',
        type: 'card add',
        cardToAdd: {
            name: 'Biscuit',
            type: 'heal',
            value: 7,
            spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png"),
            width: this.width,
            height: this.height,
            mana: 0,
            text: 'Restore 7 health.',

        },
        value: 2,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Add 2 Biscuit cards \nto hand.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png")

    }, {
        name: 'Ice Block',
        type: 'immunity',
        drawback: 'stun self',
        durationOfImmunity: '1',
        durationOfDrawback: '1',
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain Immunity for \n1 turn. \nYou are stunned for \n1 turn.',


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice_block-card.png")

    }, {
        name: 'Silence',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 7,
        width: this.width,
        height: this.height,
        duration: 2,
        mana: 1,
        text: 'If an enemy is buffing\n Stun them for 2 turns.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/counterspell-card.png")

    }, {
        name: 'Time Warp',
        type: 'buff',
        typeofbuff: 'gain extra turn',
        value: 1,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain an extra turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/time_warp-card.png")

    }, {
        name: 'Arcane Intellect',
        type: 'card draw',
        drawback: 'none',
        value: 2,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Add 2 cards to \nyour hand.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    }

    ]
}