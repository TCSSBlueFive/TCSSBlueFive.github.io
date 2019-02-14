function TopBanner(game, spritesheet, opacity) {
    this.x = 0;
    this.y = 0;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

TopBanner.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

TopBanner.prototype.update = function () {

};
