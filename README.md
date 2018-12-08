# Crystal Collector

Crystal Collector is a fun game that utilizes the random function of Math.Floor to associate random point values to a set of crystals. A target number between 19 to 120 is generated at the beginning of each round. Each crystal's value is also randomly generated. The user must discover the values associated with the crystals and to add them up. If they manage to match the random number, they win. If they go over, they lose.

## Technologies Used
* Bootstrap
* Javascript
* jQuery

## Prerequisites
* None

## Challenges 
The heart of the game lies in the use of Math.floor and the use of variables to store those randomly generated numbers as well as the total value the user has accrued. 

Comparing the target value to the user's value is important to ending the game. 

```
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
```

Throughout the game, you want to make sure that you are adding the value of the crystal to the total points after each click.