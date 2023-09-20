import * as actions from "./actions.js";
import * as elements from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

function play() {
  elements.play.addEventListener("click", () => {
    state.isRunning = document.documentElement.classList.toggle("running");
    timer.countDown();
  });
}

function pause() {
  elements.pause.addEventListener("click", () => {
    state.isRunning = document.documentElement.classList.toggle("running");
  });
}

function stop() {
  elements.stop.addEventListener("click", () => {
    state.isRunning = false;
    document.documentElement.classList.remove("running");
    state.minutes = 0;
    state.seconds = 0;
    timer.updateDisplay();
  });
}

function plus() {
  elements.plus.addEventListener("click", () => {
    if (state.isRunning) {
      return;
    }
    state.minutes += 5;
    if (state.minutes > 60) {
      state.minutes = 60;
      return;
    }
    state.seconds = 0;
    timer.updateDisplay();
  });
}

function minus() {
  elements.minus.addEventListener("click", () => {
    if (state.isRunning) {
      return;
    }
    state.minutes -= 5;
    if (state.minutes < 0) {
      state.minutes = 0;
      return;
    }
    state.seconds = 0;
    timer.updateDisplay();
  });
}

export function timeControls() {
  play();
  pause();
  stop();
  plus();
  minus();
}

export function toggleMode() {
  elements.toggleMode.addEventListener("click", (e) => {
    document.documentElement.classList.toggle("dark");
  });
}

export function controlsActions() {
  elements.musicActions.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    const buttonElement = e.target.parentElement;

    let isMute = state.isMute;

    elements.musicActionsButtons.forEach((e) => {
      console.log(e.classList);
      if (isMute) {
        e.classList.remove("active");
        sounds.muted();
      }
    });

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action](isMute);

    isMute = buttonElement.classList.toggle("active");
  });
}
