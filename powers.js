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



// Exercise click one button to turn all power on
// 1st define a variable that identified all the elements with the class of disabled
const newClass = document.querySelectorAll(".disabled");

// Declare a function that iterates through all of the classes that are now the value of the above variable
// and add a new class of enabled to them
function allPowersFunction() {
  for (let i = 0; i < newClass.length; i++) {
    newClass[i].className = "enabled";
  }
}

// Add an event listener of click to the "All Powers" that we want to turn on all the powers of the classes above
// Call the function defined above so the iteration will take place and the elements will get a new class of enabled
// added to them which will activate the power
document.querySelector("#activate-all").addEventListener("click", event => {
  console.log("button clicked");
  allPowersFunction();
});
