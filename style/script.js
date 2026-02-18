const sound = document.getElementById("scarySound");
const scaryImage = document.getElementById("scaryImage");
let loopStartTime = 0.5;

function blowCandle() {
  const candle = document.getElementById("candleImage");
  candle.src = "./style/Candle-Off.png";

  setTimeout(() => {
    sound.volume = 1.0;
    sound.currentTime = loopStartTime;
    sound.play();

    scaryImage.style.display = "block";

    sound.onended = function () {
      sound.currentTime = loopStartTime;
      sound.play();
    };
  }, 2000);
}
