//first player
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//second player
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//inner HTML
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!π";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "PLayer 2 Wins!π";
}

else{
  document.querySelector("h1").innerHTML = "Match Drawπ";
}
