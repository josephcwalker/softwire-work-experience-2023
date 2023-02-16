import createGame, { Tetromino } from "./gameLogicInterface.js"

var cnv=document.getElementById("Grid");
var ctx = cnv.getContext("2d");
for(var i=0; i<=700; i=i+35){
        ctx.moveTo(0, i);
        ctx.lineTo(700,i);
        
        ctx.strokeStyle="#264653";
        ctx.stroke();  
}
for(var i=0; i<=700; i=i+35){
        ctx.moveTo(i,0);
        ctx.lineTo(i,700);

        

        ctx.strokeStyle="#264653";
        ctx.stroke();

}


const options = [
        "cyan",     
        "blue",     
        "orange",     
        "yellow", 
        "green",
        "purple",
        "red"
        ];




let game = createGame()



function drawsquare(x, y, color){
    var canvas= document.getElementById("Grid");
    var ctx= canvas.getContext("2d");

    ctx.fillStyle= color ;
    ctx.fillRect(x, y, 35, 35);
}

// generates random block colors

function generateFill(){

    for(i = 0; i < 699;i+=35 ){
        
    
        for(j = 0; j < 349;j+=35 ){

        
            
            let x = (Math.random());
            




            if (x<0.5){
                continue
            

            }else {
                let y = Math.floor(Math.random()*7)-1;
                drawsquare(j,i,options[y])

            }

        }

    }
}


function drawTiles(){
        var i;
        var j;
        for(i = 0; i < 699;i+=35 ){
                for(j = 0; j < 349;j+=35 ){
                        
                        let temp_i = i/35;
                        let temp_j = j/35;
                        let temp = game.getTileAtPosition(temp_j, temp_i);
                        if (temp == null){
                                continue;
                        }else {
                                let color = temp;


                                drawsquare(j,i,temp);
    
                        }
    
                }
    
        }
}
drawTiles()



// e


function drawTetromino(x, y, piece, color){
    alert("yippe")
    for (b=0; b<3;b++){
            for(z=0; z<3;z++){
                if (piece[b][z] = 0 ){
                        continue
                } else{
                        drawsquare(x, y, color)
                }
            }
    }
}
