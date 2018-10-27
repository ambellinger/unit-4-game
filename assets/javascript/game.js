//General Rules of Crystal Collector

//The premise of the game is for the user to guess the points randomly generated to each crystal
// They then have to add the crystals to match the larger randomly generated number.
// If you get the correct number, you win. If you go over, you lose.

// Game design notes
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

//Use the Captain Planet Game as reference. 

/***********************************************************************/
// PseudoCode //


// //Variables must be created to store the numbers as soon as they are pressed.
// Create global variables
var ComputerPick = 0;
var wins = 0;
var losses = 0;
var ruby = 0;
var diamond = 0;
var topaz = 0;
var emerald = 0;
var totalPoints = 0;

//The computer must randomly generate a larger number between 19 and 120
var ComputerPick = Math.floor(Math.random() * 101) + 19;

//The computer must randommly generate a value for each of the crystals;
//      this will happen 4 times.
ruby = Math.floor(Math.random() * 12) + 1;
diamond = Math.floor(Math.random() * 12) + 1;
topaz = Math.floor(Math.random() * 12) + 1;
emerald = Math.floor(Math.random() * 12) + 1;

//Prep jquery
$(document).ready(function () {

    //Display the computer pick
    function initial() {
        $("#random-area").html(ComputerPick);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);

    }
    function resetGame() {

        //Reset all your base parameters: total points, computer pick, and each crystal. 
        totalPoints = 0;
        ComputerPick = Math.floor(Math.random() * 101) + 19;
        ruby = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        topaz = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        //Don't forget to display the new amounts.
        $("#random-area").html(ComputerPick);
        $("#score-area").html("");

    }


    //If Else statement that check for wins. If the crystal points equal the large randomly generated
    //      number, they win. If it goes over, they lose.

    function checkWinsOrLosses() {
        if (totalPoints === ComputerPick) {

            //Wins must be added to total amount of wins.
            wins++
            alert("You Win!");
            $("#wins").html("Wins: " + wins);

            //After a win or a loss, game must be reset.
            resetGame();

        } else if (totalPoints > ComputerPick) {
            //Losses must be added to total amount of wins.
            losses++
            alert("You Lose!");
            $("#losses").html("Losses: " + losses);


            //After a win or a loss, game must be reset.
            resetGame();
        }

    }
    function playGame() {



        //  On click function must transfer the randomly generated value for each of the crystals
        //      to the variable.         
        //      The crystals are assocaited with images. You call the image thru # id.

        $("#diamond").on("click", function () {

            //  Variables for each crystals need to be added up to the total points.

            totalPoints = totalPoints += diamond

            //  Display total points

            $("#score-area").html(totalPoints);

            //  Commpare the current total points with the computer generated points by calling the function.

            checkWinsOrLosses();
            
           
        });
        //repeat for each crystal

        $("#emerald").on("click", function () {
            totalPoints = totalPoints += emerald
            $("#score-area").html(totalPoints);
            checkWinsOrLosses();
        });

        $("#topaz").on("click", function () {
            totalPoints = totalPoints += topaz
            $("#score-area").html(totalPoints);
            checkWinsOrLosses();
        });

        $("#ruby").on("click", function () {
            totalPoints = totalPoints += ruby
            $("#score-area").html(totalPoints);
            checkWinsOrLosses();
        });


    }
    //Must call your functions to initiate the game.
    initial();

    playGame();

});

