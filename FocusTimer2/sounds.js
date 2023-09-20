export const park = new Audio("../assets/Floresta.wav");
export const cloudSnow = new Audio("../assets/Chuva.wav");
export const storeFront = new Audio("../assets/Cafeteria.wav");
export const fire = new Audio("../assets/Lareira.wav");

export function muted() {
  cloudSnow.pause();
  fire.pause();
  park.pause();
  storeFront.pause();
  return;
}

