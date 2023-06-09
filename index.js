let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this);
    let buttonInnerHtml = this.innerHTML;
    // console.log(buttonInnerHtml);
    makeSound(buttonInnerHtml);
    buttonPressAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  // console.log(event);
  makeSound(event.key);
  buttonPressAnimation(event.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      let audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      let audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      let audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;

    case "k":
      let audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;

    case "l":
      let audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;

    default:
      break;
  }
};

const buttonPressAnimation = (key) => {
  const currentButton = document.querySelector(`.${key}`);
  currentButton.classList.add("shake");
  setTimeout(() => {
    currentButton.classList.remove("shake");
  }, 300);
};
