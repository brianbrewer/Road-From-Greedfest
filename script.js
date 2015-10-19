window.addEventListener("load", function () {
  _backgroundMusic = document.getElementById("backgroundMusic");
  _backgroundMusicControl = document.querySelector(".backgroundMusicControl");

  // Toggle background music and image
  _backgroundMusicControl.addEventListener("click", function () {
    if (_backgroundMusic.paused) {
      _backgroundMusic.play();
      _backgroundMusicControl.querySelector("img").src = "http://media.overkillsoftware.com/2015/01/bom_music_on.png";
    } else {
      _backgroundMusic.pause();
      _backgroundMusicControl.querySelector("img").src = "http://media.overkillsoftware.com/2015/01/bom_music_off.png";
    }
  });
});
