import * as sounds from "./sounds.js";

export function park(isMute) {
  if (!isMute) {
    sounds.park.pause();
    return;
  }

  sounds.park.play();
}

export function cloudSnow(isMute) {
  if (!isMute) {
    sounds.cloudSnow.pause();
    return;
  }

  sounds.cloudSnow.play();
}

export function storeFront(isMute) {
  if (!isMute) {
    sounds.storeFront.pause();
    return;
  }

  sounds.storeFront.play();
}

export function fire(isMute) {
  if (!isMute) {
    sounds.fire.pause();
    return;
  }

  sounds.fire.play();
}
