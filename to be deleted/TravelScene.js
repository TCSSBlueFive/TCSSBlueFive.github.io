var AM = new AssetManager();


function TravelScene(game, dungeon, opacity){
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.travelbars = [];
    this.game = game;
    this.ctx = game.ctx;
    this.y = 100;
    this.travelBarWidth = 90;
    this.travelBarHeight = 118;
    this.bigBarY = 312;
    this.currentRoom = 0;
    this.nodeDataBase = new NodeDataBase();

};


TravelScene.prototype.generateBars = function () {
    //does 5 bars
     for (let i = 0; i < 5; i++) {
        let newBar = new TravelBar(this.game, this, this.dungeon, i, 9 + (this.travelBarWidth * i), this.y, i, 1);
        newBar.generateNodes();
        this.travelbars[i] = newBar;

     }


     let newBigNode = new BigNode(this.game, this, this.dungeon, 5, this.nodeDataBase.bigNodes[0].spritesheet, 
        this.nodeDataBase.bigNodes[0].fn, 459, this.bigBarY, 1);
    
     this.travelbars[5] = newBigNode;
     //does right 5 bars
     for (let j = 6; j < 11; j++) {
        let newBar2 = new TravelBar(this.game, this, this.dungeon,j, 630 + (this.travelBarWidth * (j - 6)), this.y, j, 1);
        newBar2.generateNodes();
        this.travelbars[j] = newBar2;
     }
}

TravelScene.prototype.draw = function () {
    for(let i = 0; i < this.travelbars.length; i++) {
        this.travelbars[i].draw();
    }    
};

TravelScene.prototype.update = function () {     
    for (let i = 0; i < this.travelbars.length; i++) {
        this.travelbars[i].update();    
    }
};
