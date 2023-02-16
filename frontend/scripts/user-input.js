import createGame, { Tetromino } from "./gameLogicInterface.js"
let game = createGame()
import { drawTiles } from "./gameUI.js"
import { drawGrid } from "./gameUI.js"

// function clearGrid(){
//     var cnv=document.getElementById("Grid");
//     var ctx = cnv.getContext("2d");
//     ctx.clearRect(0,0,canvas.width, canvas.height);
//     drawGrid();
// }


drawGrid();
drawTiles(game);
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        game.moveLeft();
        //clearGrid();
        drawTiles(game);
    }
    else if(event.keyCode == 39) {
        game.moveRight();
        //clearGrid();
        drawTiles(game);
    }
});

