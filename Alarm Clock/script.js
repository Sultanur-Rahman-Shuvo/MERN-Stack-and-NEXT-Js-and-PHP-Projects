function play() {
  let audio = new Audio(
    "https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav"
  );
  audio.play();
}

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

const setAlarm = (seconds) => {
  let d = new Date().getTime();
  setTimeout(() => {
    play();
  }, seconds * 1000);

  setInterval(() => {
    secondsLeft = -(new Date().getTime() - (d + seconds * 1000));
    if (secondsLeft > 0) {
      alarm.innerHTML =
        "Alarm ringing in " + Math.floor(secondsLeft / 1000) + " seconds";
    }
  });
};

let s = prompt("After how many seconds do you want an alarm?");
setAlarm(parseInt(s));
