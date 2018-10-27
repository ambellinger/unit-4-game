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

//Prep jquery


//The computer must randomly generate a larger number between 19 and 120
var ComputerPick= Math.floor(Math.random()* 101)+19;

//The computer must randommly generate a value for each of the crystals;
//      this will happen 4 times.
ruby = Math.floor(Math.random()* 12) + 1;
diamond = Math.floor(Math.random()* 12) +1;
topaz = Math.floor(Math.random()* 12) +1;
emerald= Math.floor(Math.random()* 12) +1;

// The crystals are assocaited with images. 

//On click function must transfer the randomly generated value for each of the crystals
//      to the variable

  $("#diamond").on("click",function(){
       alert("hello"); 
    //  global variable diamond that the set random
        //totaluser+=global variable diamond
                //score-title div to display totaluser
    // call checkWinsOrLosses()
            });

    $("#emerald").on("click",function(){
//  global variable emerald that the set random
        //totaluser+=global variable emerald
                //score-title div to display totaluser
       //call  checkWinsOrLosses()
            });
    $("#topaz").on("click",function(){
//  global variable topaz that the set random
        //totaluser+=global variable topaz
           //score-title div to display totaluser
   // call checkWinsOrLosses()
        });
    $("#ruby").on("click",function(){
//  global variable ruby that the set random
        //totaluser+=global variable ruby
        //score-title div to display totaluser
      //call  checkWinsOrLosses()
    });


//Variables for each crystals need to be added up if they have their own variables

//If Else statement that check for wins. If the crystal points equal the large randomly generated
//      number, they win. If it goes over, they lose.

//Wins and Losses must be added, accordingly

//Game must reset and new numbers must be generated. resetGame().




// $(document).ready(function(){


//     function initial()
//     {
//        $("#random-area").html(ComputerPick);
      
//     }
//    function resetGame()
//    {
//         //reset all crystal variables and computerpick
//         //to new random picks
         
//         //Total user  is zero
   
   
//    }
//    function checkWinsOrLosses()
//    {
//        //   if(totaluser===computer pick)
//         //{
//            //wins++
//             //win-area div display You're a winner!
//             // call resetgame
//        //}
//         // else if(totaluser>computer pick)
//          // {
//       ///        losses++
//       //          //win-area div display You're a Loser!
//         // call resetgame
//       //   }    
//    }
//    function playGame(){
    
//        $("#diamond").on("click",function(){
//        //  global variable diamond that the set random
//            //totaluser+=global variable diamond
//                    //score-title div to display totaluser
//        // call checkWinsOrLosses()
//                });
   
//        $("#emerald").on("click",function(){
//    //  global variable emerald that the set random
//            //totaluser+=global variable emerald
//                    //score-title div to display totaluser
//           //call  checkWinsOrLosses()
//                });
//        $("#topaz").on("click",function(){
//    //  global variable topaz that the set random
//            //totaluser+=global variable topaz
//               //score-title div to display totaluser
//       // call checkWinsOrLosses()
//            });
//        $("#ruby").on("click",function(){
//    //  global variable ruby that the set random
//            //totaluser+=global variable ruby
//            //score-title div to display totaluser
//          //call  checkWinsOrLosses()
//        });
   
   
//        }
   
//    initial();
   
//    playGame();
   
//    });
   