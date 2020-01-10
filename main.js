/* Burger Button */
const menuButton = document.querySelector(".menu-button");
let open = false;
document.addEventListener("click", toggleOpen(){
  if (open) {
    menuButton.classList.add("open");
    open = true;
  } else {
    menuButton.classList.remove("open");
    open = false;
  }
});
