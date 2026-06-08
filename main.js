let randomValue = 0,
  currentValue = 0,
  player = 1,
  score1 = 0,
  score2 = 0;

//button
let btnRoll = document.getElementById("btn-roll");
let btnHold = document.getElementById("btn-hold");
let btnNew = document.getElementById("btn-new");
let btnRule = document.getElementById("btn-rule");
let btnCloseRule = document.getElementById("btn-close");

//img
let getDice = document.getElementById("dice-img");
let getDiceBox = document.getElementById("dice-box-img");
getDice.style.display = "none";

//current
let currentScore1 = document.getElementById("current-p1");
let currentScore2 = document.getElementById("current-p2");

//total
let totalScore1 = document.getElementById("total-p1");
let totalScore2 = document.getElementById("total-p2");

//rule
let getRuleDoc = document.getElementById("rule-doc");
getRuleDoc.style.display = "none";

btnRule.addEventListener("click", function () {
  document.getElementById("btn-gr").style.marginTop = "-150px";
  getRuleDoc.style.display = "block";
});
btnCloseRule.addEventListener("click", function () {
  getRuleDoc.style.display = "none";
  document.getElementById("btn-gr").style.marginTop = "0px";

});

function SwitchPlayer() {
  currentValue = 0;
  if (player === 1) {
    currentScore1.innerHTML = currentValue;
    player = 2;
  } else {
    currentScore2.innerHTML = currentValue;
    player = 1;
  }
  document.querySelector(".box-p1").classList.toggle("active-player");
  document.querySelector(".box-p2").classList.toggle("active-player");
}

btnNew.addEventListener("click", function () {
  randomValue = 0;
  currentValue = 0;
  score1 = 0;
  score2 = 0;
  player = 1;
  currentScore1.innerHTML = currentValue;
  totalScore1.innerHTML = score1;
  currentScore2.innerHTML = currentValue;
  totalScore2.innerHTML = score2;
  getRuleDoc.style.display = "none";
  getDice.style.display = "none";
  btnRule.style.display = "block";
  document.querySelector(".box-p1").classList.add("active-player");
  document.querySelector(".box-p2").classList.remove("active-player");
  document.querySelector(".box-p1").classList.remove("winner-player");
  document.querySelector(".box-p2").classList.remove("winner-player");
  document.getElementById("btn-gr").style.marginTop = "0px";
});

btnRoll.addEventListener("click", function () {
  // document.getElementById("btn-gr").style.marginTop = "0px";
  if (score1 < 100 && score2 < 100) {
    randomValue = Math.floor(Math.random() * 6) + 1;
    getDice.style.display = "block";
    getDice.src = `assets/imgs/dice-${randomValue}.jpg`;
    if (randomValue != 1) {
      currentValue += randomValue;
      if (player === 1) {
        currentScore1.innerHTML = currentValue;
      } else {
        currentScore2.innerHTML = currentValue;
      }
    } else {
      SwitchPlayer();
    }
  }
  if (score1 >= 100) {
    document.querySelector(".box-p1").classList.add("winner-player");
  }
  if (score2 >= 100) {
    document.querySelector(".box-p2").classList.add("winner-player");
  }
});

btnHold.addEventListener("click", function () {
  if (score1 < 100 && score2 < 100) {
    if (player === 1) {
      score1 += currentValue;
      totalScore1.innerHTML = score1;
    } else {
      score2 += currentValue;
      totalScore2.innerHTML = score2;
    }
    SwitchPlayer();
  }
  if (score1 >= 100) {
    document.querySelector(".box-p1").classList.add("winner-player");
  }
  if (score2 >= 100) {
    document.querySelector(".box-p2").classList.add("winner-player");
  }
});
