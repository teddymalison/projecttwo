 //My variables for the game

        var painted;

        var content;

            var winningCombinations;

        var turn = 0;

        var theCanvas;

        var c;

        var cxt;

        var squaresFilled = 0;

        var w;

        var y;

        //Functions and such

        window.onload=function(){

            painted = new Array();

            content = new Array();

            winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

 

for(var l = 0; l <= 8; l++){

            painted[l] = false;

            content[l]='';

            }

        }

        //The way the game works methods and such

        function canvasClicked(canvasNumber){

            theCanvas = "canvas"+canvasNumber;

            c = document.getElementById(theCanvas);

          

           
if(painted[canvasNumber-1] ==false){

                if(turn%2==0){

                    cxt.beginPath();

                    cxt.moveTo(10,10);

                    cxt.lineTo(40,40);

                    cxt.moveTo(40,10);

                    cxt.lineTo(10,40);

                    cxt.stroke();

                    cxt.closePath();

                    content[canvasNumber-1] = 'X';

                }

                else{

                    cxt.beginPath();

                    cxt.arc(25,25,20,0,Math.PI*2,true);

                    cxt.stroke();

                    cxt.closePath();

                    content[canvasNumber-1] = 'O';

                }

                turn++;

                painted[canvasNumber-1] = true;

                squaresFilled++;

                checkForWinners(content[canvasNumber-1]);

 

                if(squaresFilled==9){

                    alert("Sorry, game over!");

                    location.reload(true);

                }

             

            }

            else{

                alert("Can't click there darlin!");

            }


        }

        function checkForWinners(symbol){

             

            for(var a = 0; a < winningCombinations.length; a++){

            if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){

                alert(symbol+ "You won! Congrats!");

                playAgain();

            }

            }

        }
            
        function playAgain(){

            y=confirm("Please play again?");

            if(y==true){

                alert("Awesome!");

                location.reload(true);

            }

            else{

                alert("Sorry y'all you lose!");

        }

        }

// I may or may not have made this a lot more complex than it needed to be. I struggled really hard with this part of the project and needed help figuring this entire section out. I tried to make it appealing and fun, but had a lot of confusion along the way.