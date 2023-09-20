import state from "./state.js";
import * as elements from "./elements.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countDown() {
  clearTimeout(state.countdownID);
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    state.isRunning = document.documentElement.classList.toggle("running");
    return;
  }

  updateDisplay(minutes, seconds);

  state.countdownID = setTimeout(() => countDown(), 1000);
}
