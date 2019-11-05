var randomVariable1 = Math.random();
randomVariable1 = randomVariable1 * 6;
randomVariable1 = Math.floor(randomVariable1) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
if (randomVariable1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (randomVariable1 == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomVariable1 == 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomVariable1 == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomVariable1 == 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if (randomVariable2 == 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomVariable2 == 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomVariable2 == 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomVariable2 == 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomVariable2 == 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomVariable2 > randomVariable1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}