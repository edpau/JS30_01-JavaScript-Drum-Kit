function playSound(e: KeyboardEvent) {
  const audio = document.querySelector<HTMLAudioElement>(
    `audio[data-key="${e.keyCode}"]`
  );
  const key = document.querySelector<HTMLDivElement>(
    `.key[data-key="${e.keyCode}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key?.classList.add("playing");
}

function removeTransition(this: HTMLDivElement, e: TransitionEvent): void {
  if (e.propertyName !== "transform") return; // there is more than one TransitionEvent, so we pick the longest one, "transform"
  this.classList.remove("playing");
}

const keys = document.querySelectorAll<HTMLDivElement>(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
