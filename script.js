let burger = document.querySelector(".nav_burger");
let burger_menu = document.querySelector(".burger_menu");
let exit_box = document.querySelector(".exit_box");
let gmail = document.querySelector(".gmail_input")
burger.addEventListener("click", () => {
  burger_menu.classList.add("burger_none");
});

exit_box.addEventListener("click", () => {
  burger_menu.classList.remove("burger_none");
});

gmail.addEventListener("click" , ()=>{
  console.log("hello");
})

