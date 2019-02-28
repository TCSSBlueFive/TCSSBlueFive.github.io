var AM = new AssetManager();


function shop_scene(game, spritesheet, dungeon, opacity){
    this.dungeon = dungeon;
    this.x = 20;// each card will be 75 units wide for now
    this.y = 200;
    this.width = 350;
    this.height = 110;
    this.shop_cards = [];
    this.spritesheet = spritesheet;
    this.opacity = opacity;
    this.generic_cards = 5;
    this.special_cards = 2;
    this.CardDataBase = new CardDataBase();
    this.game = game;
    this.buffer = 50
    this.ctx = game.ctx;
    
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

shop_scene.prototype.createAndAddCard = function (i) {
    var myNum = getRandomInt(this.CardDataBase.cards_rewards.length);
    newCard = this.CardDataBase.cards_rewards[myNum]

    var goldCost = getRandomInt(50) + 50;
    console.log(newCard);
    this.shop_cards[i] = new card_shop_item(this.game, this.dungeon, this, goldCost, newCard , this.x + (i * newCard.width) + ( i * this.buffer), this.y);
}

shop_scene.prototype.generateShopCards = function () {
    for (let i = 0; i < this.generic_cards; i++) {
        this.createAndAddCard(i);
    }
    for (let i = this.generic_cards; i< this.generic_cards + this.special_cards; i++) {
        this.createAndAddCard(i);
    }

    // card_shop_item(game, dungeon, shop, goldcost, cardFromDatabase, x, y)

   
}

shop_scene.prototype.remove = function (shop_item_to_remove) {
    var index = this.shop_cards.indexOf(shop_item_to_remove);
    if (index > -1) {
        this.shop_cards.splice(index, 1);
        //this.DeckListCardsUsed.push(newCard);

    }
}


shop_scene.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        0,0);
    for (let i = 0; i < this.shop_cards.length; i++) {
        this.shop_cards[i].draw();
    }
    
};


shop_scene.prototype.update = function () {    
    for (let i = 0; i < this.shop_cards.length; i++) {
        this.shop_cards[i].update();
    }

};

