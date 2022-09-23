const listMenu = document.getElementById('listMenu');
const navMenu = document.querySelector(".menu");

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
  