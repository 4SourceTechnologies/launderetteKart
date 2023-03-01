var pImg = document.querySelector(".profileImg");
var tabList = document.querySelector(".leftNav ul");

pImg.addEventListener("click", function () {
  tabList.classList.toggle("slideIn");
});

var navBtn = document.querySelectorAll(".leftNav ul .nav-link");
navBtn.forEach((button) => {
  button.addEventListener("click", function () {
    tabList.classList.remove("slideIn");
  });
});
