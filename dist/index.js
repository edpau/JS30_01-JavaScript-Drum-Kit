"use strict";
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key === null || key === void 0 ? void 0 : key.classList.add("playing");
}
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return; // there is more than one TransitionEvent, so we pick the longest one, "transform"
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
