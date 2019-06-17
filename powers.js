// To toggle the class between two classes you must put both class options inside the function
// "power enabled" is 2 functions because they are separated by a space
// This function needs to be defined outside of the function that calls it
function flightHandlerFunction() {
  document.querySelector("#flight").classList.toggle("enabled");
  document.querySelector("#flight").classList.toggle("disabled");
}

// The function being called here has to be defined first otherwise the system does not know what you want executed.
// The function could not be defined and executed inside this event listener because you cannot define a function within
// an event listener.

document.querySelector("#activate-flight").addEventListener("click", () => {
  console.log("button clicked");
  flightHandlerFunction();
});

function mindreadingFunction() {
  document.querySelector("#mindreading").classList.toggle("enabled");
  document.querySelector("#mindreading").classList.toggle("disabled");
}
document
  .querySelector("#activate-mindreading")
  .addEventListener("click", () => {
    console.log("button clicked");
    mindreadingFunction();
  });

function xrayFunction() {
  document.querySelector("#xray").classList.toggle("enabled");
  document.querySelector("#xray").classList.toggle("disabled");
}
document.querySelector("#activate-xray").addEventListener("click", () => {
  console.log("button clicked");
  xrayFunction();
});

const classEnabled = document.querySelectorAll(".enabled");
const classDisabled = document.querySelectorAll(".disabled");

function allPowersActivate() {
  for (let i = 0; i < classDisabled.length; i++) {
      classDisabled[i].classList.remove("disabled");
      classDisabled[i].classList.add("enabled");

  }
}

function allPowersDeActivate() {
    for (let i = 0; i < classDisabled; i++) {
        classDisabled[i].classList.remove("enabled");
        classDisabled[i].classList.add("disabled");
    }
}

const powersOnButton = document.querySelector("#activate-all").addEventListener("click", () => {
    console.log("button clicked");
    allPowersActivate();
});

const powersOffButton = document.querySelector("#deactivate-all").addEventListener("click", () => {
    console.log("button clicked");
    allPowersDeActivate();
  });
