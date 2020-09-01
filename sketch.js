var canvas,playerCount,form,game,player;
var gameState = 0;
var database;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    }

function draw(){
    
}
