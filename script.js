// For Dice Image 1
document.querySelector(".again").addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var image1 = document.querySelector(".img1");
  // image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  image1.setAttribute("src", `./images/dice${randomNumber1}.png`);

  // For Dice Image 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", `./images/dice${randomNumber2}.png`);

  // For changing Text to Winner or Draw
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = " &#128681; Player 2 Wins!";
  }
});
