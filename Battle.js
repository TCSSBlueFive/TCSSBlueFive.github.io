//WORK IN PROGRESS

function Battle(game, Enemies, PlayerCharacter) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
    //this.Enemies = Enemies.constructor === Array ? [...Enemies] : [Enemies];
    this.Enemy = Enemies;
    this.PlayerTurn = true;
    this.isBattleOver = false;
}

Battle.prototype.playerMove = function() {
    if (this.PlayerTurn && !this.isBattleOver) {
        var selectedMove = this.PlayerCharacter.playCard();
        if (selectedMove.type === 'damage') {
            this.Enemy.takeDamage(selectedMove.value);
            if(!this.Enemy.isAlive()) {
            //this.Enemies[0].takeDamage(selectedMove.value);
           // if (!this.Enemies[0].isAlive()) {
                this.isBattleOver = true;
            }
        }
        this.PlayerTurn === false;
    }
   // console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
    console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);

}


Battle.prototype.enemyMoves = function() {
    if (this.PlayerTurn && !this.isBattleOver) {
        if( this.Enemy.isAlive()) {
            var attack = this.Enemy.attackPlayer();
            if (attack.type === 'damage') {

                this.PlayerCharacter.takeDamage(attack.value);
                if (!this.PlayerCharacter.isAlive()) {
                    this.battle.isBattleOver = true;
                    this.game.gameOver()
                }
            }
            // deal with buffs for enemies or blocks here

        }
    }

   // this.PlayerTurn = true;
    console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);
}


