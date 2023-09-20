const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const toggleMode = document.querySelector('.toggleMode')
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector('.stop')
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const timerActions = document.querySelector(".timer-actions");
const musicActions = document.querySelector(".music-actions");
const musicActionsButtons = document.querySelectorAll('.music-actions button')

export {
  minutes,
  seconds,
  toggleMode,
  play,
  pause,
  stop,
  plus,
  minus,
  timerActions,
  musicActions,
  musicActionsButtons
};
