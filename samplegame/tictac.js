var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var gameOver = true;
var check = true;
var i = Math.floor(Math.random()*2);

var transInput = function(p){
    switch(p) {
        case "A3": return 0;
        case "B3": return 1;
        case "C3": return 2;
        case "A2": return 3;
        case "B2": return 4;
        case "C2": return 5;
        case "A1": return 6;
        case "B1": return 7;
        case "C1": return 8;
        default  : console.log("Entry Unknown!");
    }
};

var transOutput = function(p){
    switch(p) {
        case  1: return "x";
        case 10: return "o";
        default: return " ";
    }
};

var drawBoard = function(){
    console.log("3 " + transOutput(board[0]) + "|" + transOutput(board[1]) + "|" + transOutput(board[2]));
    console.log(" -----");
    console.log("2 " + transOutput(board[3]) + "|" + transOutput(board[4]) + "|" + transOutput(board[5]));
    console.log(" -----");
    console.log("1 " + transOutput(board[6]) + "|" + transOutput(board[7]) + "|" + transOutput(board[8]));
    console.log(" A B C");
};

drawBoard();

if(i === 0){
    console.log("You go first!");
} else {console.log("Computer goes first!");}

while (gameOver){
    if(i === 0){
        var playerMove = transInput(prompt("Your move!"));
        var check = true;
        while(check){
            if(board[playerMove] === 0){
                board[playerMove] = 1;
                drawBoard();
                i = 1;
                check = false;
            } else {
                playerMove = transInput(prompt("Try again."));
            }       
        }
    } else if(i === 1){
        console.log("Computer's turn...");
        var check = true;
        while(check){
            var compMove = Math.floor(Math.random()*9);
            if(board[compMove] === 0){
                board[compMove] = 10;
                drawBoard();
                i = 0;
                check = false;
            }
        }
    }
    var scores = [
        board[0] + board[1] + board[2],
        board[3] + board[4] + board[5],
        board[6] + board[7] + board[8],
        board[0] + board[3] + board[6],
        board[1] + board[4] + board[7],
        board[2] + board[5] + board[8],
        board[0] + board[4] + board[8],
        board[2] + board[4] + board[6]
    ];

    var scoreSum = 0;

    for(var k = 0; k < board.length; k++){
        scoreSum += board[k];
    }

    for(var j = 0; j < scores.length; j++){
        if(scores[j] === 3){
            console.log("You Win!");
            gameOver = false;
            break;
        } else if(scores[j] === 30){
            console.log("You Lose!");
            gameOver = false;
            break;
        }
    }

    if(
        gameOver === true && (
            scoreSum === 54 || 
            scoreSum === 45
        )
    ){
        console.log("Draw!");
        gameOver = false;
    }
}
