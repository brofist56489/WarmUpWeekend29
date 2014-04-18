
var Game = Quintus().include("Sprites").setup({ width: 854, height: 480 });

Game.Class.extend("TestClass", {
    init: function() {
        console.log("Test Class instance made!");    
    },
    
    testMethod: function() {
        console.log("Test Class testMethod called"); 
    },
});

Game.Sprite.extend("TestSprite", {
    init: function(p) {
        this._super(p, {
            x: 10,
            y: 100,
            w: 50,
            h: 100,
        });
    },
    
    draw: function(ctx) {
        console.log("Test From testSprite");
        ctx.fillStyle = "#0000ff";
        ctx.fillRect(0, 0, this.p.w, this.p.h);
    },
});

// Game.scene("testScene", function(stage) {
//     var testSpr = stage.insert(new Game.TestSprite()); 
// });

// Game.stageScene("testScene");
Game.load([], function() {
    console.log("Game loaded");
    var test = new Game.TestSprite({ x: 100, y: 100, w: 100, h: 100});
    Game.gameLoop(function(dt) {
        test.update(dt);
        Game.clear();
        Game.ctx.strokeStyle = "#000";
        Game.ctx.strokeRect(0, 0, 854, 480);
        test.render(Game.ctx);
        Game.ctx.fillStyle = "#000";
        Game.ctx.beginPath();
        Game.ctx.arc(100, 100, 10, 0, 2 * Math.PI);
        Game.ctx.closePath();
        Game.ctx.fill();
    });
});