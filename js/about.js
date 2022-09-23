console.log("working");
// let home = document.getElementById("link-home");
// let title = document.getElementById("title");
// let cnTitle = document.getElementById("cn-title");
// let menu = document.getElementById("link-menu");
// let title2 = document.getElementById("title2");
const about = document.getElementById("About");
const listMenu = document.getElementById('listMenu');
const navMenu = document.querySelector(".menu");
const info = document.querySelector(".info");



listMenu.addEventListener("click", () => {
  listMenu.classList.toggle("bi-x");
  listMenu.style.transition = "all 0.4s ease-in-out"
  navMenu.classList.toggle("active");
  document.querySelectorAll(".menu ul li a").forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    listMenu.classList.toggle("bi-x");
    listMenu.style.transition = "all 0.4s ease-in-out"

  }))
});

info.addEventListener("mouseover", () => {
  about.classList.add("active");
})
info.addEventListener("mouseleave", () => {
  about.classList.remove("active");
})