import createGame, { Tetromino } from "./gameLogicInterface.js"
let game = createGame()
import { drawTiles } from "./gameUI.js"
import { drawGrid } from "./gameUI.js"

function clearGrid(){
    var cnv=document.getElementById("Grid");
    var ctx = cnv.getContext("2d");
    ctx.clearRect(0,0,cnv.width, cnv.height);
    drawGrid();
}


drawGrid();
drawTiles(game);
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        game.moveLeft();
        clearGrid();
        drawTiles(game);
    }
    else if(event.keyCode == 39) {
        game.moveRight();
        clearGrid();
        drawTiles(game);
    }else if(event.keyCode == 38) {
        game.rotateTetrominoClockwise();
        clearGrid();
        drawTiles(game);
    }

    
    
    
});

document.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        game.gameTick();
        clearGrid();
        drawTiles(game)
    }

});

var interValid = window.setInterval(function(){
    game.gameTick();
    clearGrid();
    drawTiles(game);
},1000);
