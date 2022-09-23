console.log("working");
const show = document.querySelector(".show-hide"),
  input2 = document.querySelector(".input2"),
  infoBox2 = document.querySelector(".form-info"),
  errorText2 = document.querySelector(".form-info .text"),
  error2 = document.querySelector(".error-hide"),
  input1 = document.querySelector(".input1"),
  infoBox1 = document.querySelector(".form-info1"),
  errorText1 = document.querySelector(".form-info1 .text1"),
  error1 = document.querySelector(".error-hide1 "),
  log = document.querySelector(".log"),
  navMenu = document.querySelector(".menu"),
  btncn = document.querySelector(".cn a"),
  content = document.querySelector(".content"),
  form = document.querySelector(".form"),
  listMenu = document.getElementById('listMenu');

show.addEventListener("click", () => {
  if (input2.type === "password") {
    input2.type = "text";
    show.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  } else {
    input2.type = "password";
    show.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  }
});

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

btncn.addEventListener("click", ()=> {
  content.style.display = "none";
  // form.style.display = "inline";
  form.classList.toggle('active');
})

input2.addEventListener("keyup", () => {
  let val2 = input2.value;

  if (val2.length < 8) {
    infoBox2.classList.add("active2");
    errorText2.textContent = "must be 8 character or more";
    errorText2.style.color = "red";
    error2.style.color = "red";
  }
  if (val2.length >= 8) {
    infoBox2.classList.add("active2");
    errorText2.textContent = "That's Ok";
    errorText2.style.color = "green";
    error2.style.color = "green";
  }
  if (val2 == "") {
    infoBox2.classList.remove("active2");
  }
});
input1.addEventListener("keyup", () => {
  let val1 = input1.value;

  if (val1.length == 0) {
    infoBox1.classList.remove("active1");
  } else if (val1.length < 15) {
    infoBox1.classList.add("active1");
    errorText1.textContent = "You should continue";
    errorText1.style.color = "red";
    error1.style.color = "red";
  } else if (val1.length >= 15) {
    infoBox1.classList.add("active1");
    errorText1.textContent = "Maybe server will accept it";
    errorText1.style.color = "green";
    error1.style.color = "green";
  }
});

log.addEventListener("click", () => {
  let val1 = input1.value;
  let val2 = input2.value;

  if (val1 == "" && val2 == "") {
    infoBox1.classList.add("active1");
    errorText1.textContent = "You forgot enter Email ";
    errorText1.style.color = "red";
    error1.style.color = "red";
    infoBox2.classList.add("active2");
    errorText2.textContent = "You forgit enter password";
    errorText2.style.color = "red";
    error2.style.color = "red";
  }
  if (val1 != "" && val2 != "") {
    if (val2.length >= 8) {
      infoBox2.classList.remove("active2");
      input2.style.borderBottomColor = "green";
    } else {
      infoBox2.classList.add("active2");
      errorText2.textContent = "must be 8 character or more";
      errorText2.style.color = "red";
      error2.style.color = "red";
      input2.style.borderBottomColor = "red";
    }
    if (val1.length >= 15) {
      infoBox1.classList.remove("active1");
      input1.style.borderBottomColor = "green";
    } else if (val1.length < 15 && val1.length > 9) {
      infoBox2.classList.add("active1");
      errorText2.style.color = "red";
      error2.style.color = "red";
      input1.style.borderBottomColor = "red";
    }
  }
  if (val1.length == 0 && val2 != "") {
  }
});
