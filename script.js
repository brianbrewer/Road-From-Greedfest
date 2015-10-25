var _backgroundMusic = document.getElementById("backgroundMusic"); // Audio element
var _backgroundMusicControl = document.querySelector(".backgroundMusicControl"); // Audio toggle button
var _pathItemGoals = document.querySelectorAll(".pathItemGoal"); // All working goals
var _pathGoalPopup = document.querySelector(".pathGoalPopup"); // Popup showing the goal information

_pathItemGoalCallback = function (e) {
  // Show popup and move to goal
  _pathGoalPopup.classList.remove("hidden");
  _pathGoalPopup.style.left = this.style.left;
  _pathGoalPopup.style.top = this.style.top;

  // Grab stats for the popup from the goal clicked
  var data = e.target.dataset;
  _pathGoalPopup.querySelector(".current").innerHTML = data.current;
  _pathGoalPopup.querySelector(".goal").innerHTML = data.goal;
  _pathGoalPopup.querySelector(".title").innerHTML = data.title;
  _pathGoalPopup.querySelector(".description").innerHTML = data.description;
};

// Remember setting for music on/off (Yeah, it's pedantic)
if (window.localStorage.musicToggle === "false") {
  _backgroundMusic.pause();
  _backgroundMusicControl.querySelector("img").src = "http://media.overkillsoftware.com/2015/01/bom_music_off.png";
}

// Toggle background music and image
_backgroundMusicControl.addEventListener("click", function () {
  if (_backgroundMusic.paused) {
    window.localStorage.musicToggle = true;
    _backgroundMusic.play();
    _backgroundMusicControl.querySelector("img").src = "http://media.overkillsoftware.com/2015/01/bom_music_on.png";
  } else {
    window.localStorage.musicToggle = false;
    _backgroundMusic.pause();
    _backgroundMusicControl.querySelector("img").src = "http://media.overkillsoftware.com/2015/01/bom_music_off.png";
  }
});

// Attach handler to all working goals
for (i = 0, j = _pathItemGoals.length; i < j; i += 1) {
  _pathItemGoals[i].addEventListener("click", _pathItemGoalCallback);
}

// Attach close button logic
_pathGoalPopup.querySelector(".close").addEventListener("click", function () {
  _pathGoalPopup.classList.add("hidden");
});

$(document).bind('click', function(e) {
  if(!$(e.target).is(_pathGoalPopup) && !$(e.target).is(".pathItemGoal")) {
    _pathGoalPopup.classList.add("hidden");
  }
});
