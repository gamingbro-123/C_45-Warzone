var database;
var gameState=0;
var playerCount;
var form;
var game;


function setup()
{
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();

    

}

function draw()
{
    

}