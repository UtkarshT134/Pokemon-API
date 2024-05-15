const loginButton = document.getElementById("loginButton");
const signInDialog = document.getElementById("signInDialog");
const closeButton = document.querySelector(".dialog-close");
const element = document.querySelector(".flex");
const navbar = document.querySelector("#nav");
const bodyElement = document.getElementsByTagName("body")[0];

//Functions
const closeSignInDialog = function () {
  signInDialog.close();
};
loginButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Stop the event from propagating to the body
  signInDialog.showModal();
});
