const menuDiv = document.getElementById("menuDiv");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", (e) => {
  menuDiv.classList.toggle("hidden");
});
