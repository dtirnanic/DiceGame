function RollDice(sidedDie){

    var d1 = Math.floor(Math.random() * sidedDie) +1;
    var d2 = Math.floor(Math.random() * sidedDie) +1;
    var diceTotal = d1 + d2;
}

var player = [playerOne ,{score = 0}, playerTwo ,{score = 0}, playerThree ,{score = 0}, playerFour ,{score = 0}, playerFive ,{score = 0}, playerSix ,{score = 0}, playerSeven ,{score = 0}, playerEight ,{score = 0}, playerNine ,{score = 0}, playerTen ,{score = 0}]

function PlayerRollDice(){

    for (var i = 0;i < player.length; i++){
   
        player[i].RollDice(4)+player[i].RollDice(6)+player[i].RollDice(8)+player[i].RollDice(10)+player[i].RollDice(12)+player[i].RollDice(20)
    } 
}


function Round1(){
p1.RollDice(6);
p2.RollDice(6);
get winner1

p3.RollDice(6);
p4.RollDice(6);
get winner2

p5.RollDice(6);
p6.RollDice(6);
get winner3

p7.RollDice(6);
p8.RollDice(6);
get winner4

p9.RollDice(6);
p10.RollDice(6);
get winner5

loser1 plays loser2 winner goes to round 2
loser3 plays loser4 winner goes to round 2

loser 
loser
loser

}

function Round2(){
    winner1.RollDice(6);
    winner2.RollDice(6);
    get winner6

    winner3.RollDice(6);
    winner4.RollDice(6);
    get winner7

    winner5.RollDice(6);

}

function Round3(){

}

function Round4(){

}

function Round5(){

}

function Round6(){

}





 

