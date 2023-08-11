let homeCount = 0;
let awayCount = 0;

let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("guestScore");

function increaseHome(num) {
  homeCount += num;
  render();
}

function increaseAway(num) {
  awayCount += num;
  render();
}

function highlightLeader() {
  if (homeCount > awayCount) {
    homeScore.style.border = "3px solid #FF0000";
    awayScore.style.border = "0px solid #FF0000";
  } else if (awayCount > homeCount) {
    awayScore.style.border = "3px solid #FF0000";
    homeScore.style.border = "0px solid #FF0000";
  } else {
    awayScore.style.border = "0px solid #FF0000";
    homeScore.style.border = "0px solid #FF0000";
  }
}

function render() {
  homeScore.textContent = homeCount;
  awayScore.textContent = awayCount;
  highlightLeader();
}

function resetCount() {
  homeCount = 0;
  awayCount = 0;

  render();
}
