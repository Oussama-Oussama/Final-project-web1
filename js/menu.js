console.log("working");
const main = document.getElementById("main"),
  elements = document.getElementById("elements"),
  whatAbout = document.getElementById("knowAbout"),
  listMenu = document.getElementById('listMenu'),
  navMenu = document.querySelector(".menu"),
  slide = document.getElementById("slideLeft"),
  logo = document.querySelector(".logo-main");

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
  
  logo.addEventListener("click", ()=> {
    slide.classList.toggle("active");
    document.querySelectorAll(".slide-left ul li").forEach(catego => catego.addEventListener("click", ()=> {
      slide.classList.remove("active");
    }))
  })
  
  // appear = document.getElementById("appear"),
  // show = document.getElementById("appearSlide"),



// appear.addEventListener("click", () => {
//   slide.classList.add("active");
//   main.style.width = "100%";
// });
// show.addEventListener("click", () => {
//   slide.classList.remove("active");

//   main.style.width = "75%";
// });

const dogsItem = document.getElementById("dogss");
const catsItem = document.getElementById("catss");
const birdsItem = document.getElementById("birdss");
const fishesItem = document.getElementById("fishess");
const adog = document.getElementById("adog");
const acat = document.getElementById("acat");
const abird = document.getElementById("abird");
const afish = document.getElementById("afish");
const atotal = document.getElementById("atotal");

var doggeld = [];
var catgeld = [];
var birdgeld = [];
var fishgeld = [];
var totalgeld = [];

const bergie = {
  src: "../res/german.jpg",
  text: {
    name: "German-shepherd",
    prix: "99$",
    kind: "Dog",
    age: "4 years old",
  },

  name: "German-shepherd",
  prix: 99,
  kind: "Dog",
};
const malinoi = {
  src: "../res/malinoi.jfif",
  text: {
    name: "Malinoie",
    prix: "100$",
    kind: "Dog",
    age: "3 years old",
  },

  name: "Malinoi",
  prix: 100,
  kind: "Dog",
};
const akita = {
  src: "../res/akita.jpg",
  text: {
    name: "Akita",
    prix: "110$",
    kind: "Dog",
    age: "3.5 years old",
  },

  name: "Akita",
  prix: 110,
  kind: "Dog",
};
const rod = {
  src: "../res/rodweiler.jpg",
  text: {
    name: "Rotweiler",
    prix: "60$",
    kind: "Dog",
    age: "5 years old",
  },
  name: "Rotweiler",
  prix: 60,
  kind: "Dog",
};
const puppy = {
  src: "../res/puppy.jpg",
  text: {
    name: "Puppy",
    prix: "21$",
    kind: "Dog",
    age: "6 years old",
  },
  name: "Puppy",
  prix: 21,
  kind: "Dog",
};
const taros = {
  src: "../res/taros.jpg",
  text: {
    name: "Taros",
    prix: "25$",
    kind: "Dog",
    age: "2.5 years old",
  },
  name: "Taros",
  prix: 25,
  kind: "Dog",
};
const kannich = {
  src: "../res/kannich.jpg",
  text: {
    name: "Kannich",
    prix: "20$",
    kind: "Dog",
    age: "1 years old",
  },
  name: "Kanish",
  prix: 20,
  kind: "Dog",
};
const food1 = {
  src: "../res/food1.webp",
  text: {
    name: "Happy",
    prix: "20$",
    kind: "Dogs-food",
    age: "5 years old",
  },
  name: "Happy",
  prix: 20,
  kind: "food",
};
const food2 = {
  src: "../res/food2.webp",
  text: {
    name: "Pedigree",
    prix: "20$",
    kind: "Dogs-food",
    age: "5 years old",
  },
  name: "Pedigree",
  prix: 20,
  kind: "food",
};
const food3 = {
  src: "../res/food3.jfif",
  text: {
    name: "Small-dog",
    prix: "20$",
    kind: "Dogs-food",
    age: "5 years old",
  },
  name: "Small-dog",
  prix: 20,
  kind: "food",
};
const food4 = {
  src: "../res/food4.png",
  text: {
    name: "Hill's",
    prix: "20$",
    kind: "Dog-food",
    age: "5 years old",
  },
  name: "Hill's",
  prix: 20,
  kind: "food",
};
const food5 = {
  src: "../res/food5.webp",
  text: {
    name: "Puppy",
    prix: "20$",
    kind: "Dog-food",
    age: "5 years old",
  },
  name: "Puppy",
  prix: 20,
  kind: "food",
};

const items = [
  bergie,
  malinoi,
  akita,
  rod,
  puppy,
  taros,
  kannich,
  food1,
  food2,
  food3,
  food4,
  food5,
];
const buy = (i) => {
  const { prix } = items[i];
  let num = 0;
  doggeld.push(prix);
  doggeld.map((el) => (num += el));
  adog.value = num;

  calcule();
};

function calcule() {
  let total = 0;
  total += adog.value ? adog.value - 0 : 0;
  total += acat.value ? acat.value - 0 : 0;
  total += abird.value ? abird.value - 0 : 0;
  total += afish.value ? afish.value - 0 : 0;
  atotal.value = total;
}

const detailDog = (i) => {
  const { text, src } = items[i];
  console.log(i, text);
  whatAbout.insertAdjacentHTML(
    "beforeend",
    `
    <div class="parg">
      <button onClick="supp(this.parentElement)" >x</button>
      <div class="thatimage">
        <img src="${src}" />
      </div>
      <div class="thatlist">
        <h3>Name : ${text.name}</h3>
        <h3>Prix : ${text.prix}</h3>
        <h3>Kind : ${text.kind}</h3>
        <h3>Age : ${text.age}</h3>
      </div>
    </div>
  `
  );
};
dogsItem.addEventListener("click", () => {
  elements.innerHTML = "";
  whatAbout.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let { src, name, prix, text } = items[i];
    elements.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="image">
          <img src="${src}"  />
        </div>
        <div class="details">
          <p class="txt"> ${name} </p>
          <span class="prix">${prix} $</span>
          
        </div>
        <div class="link">
          <button id="linkBtn" onClick="buy(${i})" >Acheter</button>
          <button onclick="detailDog(${i})"  >More details</button>
        </div>
        
      </div>
      </br>
    `
    );
  }
});

const white = {
  src: "../res/cat-images/white.jpg",
  text: {
    name: "White",
    prix: "40$",
    kind: "Cat",
    age: "6 Months",
  },
  name: "white",
  prix: 40,
  kind: "cat",
};
const black = {
  src: "../res/cat-images/black.jpg",
  text: {
    name: "Black",
    prix: "30$",
    kind: "Cat",
    age: "1 years old",
  },
  name: "black",
  prix: 30,
  kind: "cat",
};
const ciamo = {
  src: "../res/cat-images/ciamo.jpg",
  text: {
    name: "Ciamo",
    prix: "50$",
    kind: "Cat",
    age: "9 Months",
  },
  name: "Ciamo",
  prix: 50,
  kind: "cat",
};
const fluffy = {
  src: "../res/cat-images/fluffy.jpg",
  text: {
    name: "Fluffy",
    prix: "25$",
    kind: "Cat",
    age: "1 years old",
  },
  name: "Fluffy",
  prix: 25,
  kind: "cat",
};
const garfield = {
  src: "../res/cat-images/garfield.jfif",
  text: {
    name: "Garfield",
    prix: "40$",
    kind: "Cat",
    age: "3 years old",
  },
  name: "Garfield",
  prix: 40,
  kind: "cat",
};
const tiger = {
  src: "../res/cat-images/lili.jpg",
  text: {
    name: "Tiger",
    prix: "18$",
    kind: "Cat",
    age: "2 years old",
  },
  name: "Tiger",
  prix: 18,
  kind: "cat",
};
const newyork = {
  src: "../res/cat-images/newyork.jpg",
  text: {
    name: "Nwe-York",
    prix: "20$",
    kind: "Cat",
    age: "2.5 years old",
  },
  name: "New-York",
  prix: 20,
  kind: "cat",
};
const noiretblanch = {
  src: "../res/cat-images/noiretblanch.jfif",
  text: {
    name: "Noir-Blanch",
    prix: "28$",
    kind: "Cat",
    age: "3 years old",
  },
  name: "Black-White",
  prix: 28,
  kind: "cat",
};
const foodcat1 = {
  src: "../res/cat-images/foodcat1.jfif",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 20,
  kind: "food",
};
const foodcat2 = {
  src: "../res/cat-images/foodcat2.webp",
  text: {
    name: "Food",
    prix: 10,
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const foodcat3 = {
  src: "../res/cat-images/foodcat3.jpg",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Cat-food",
    age: "5 years old",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const foodcat4 = {
  src: "../res/cat-images/foodcat4.jfif",
  text: {
    name: "Food",
    prix: 10,
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const foodcat5 = {
  src: "../res/cat-images/food5.webp",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const foodcat6 = {
  src: "../res/cat-images/food6.webp",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const foodcat7 = {
  src: "../res/cat-images/food7.jfif",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Cat-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};

const cats = [
  white,
  black,
  ciamo,
  fluffy,
  garfield,
  tiger,
  newyork,
  noiretblanch,
  foodcat1,
  foodcat2,
  foodcat3,
  foodcat4,
  foodcat5,
  foodcat6,
  foodcat7,
];
const buycat = (i) => {
  const { prix } = cats[i];
  let num = 0;
  catgeld.push(prix);
  catgeld.map((el) => (num += el));
  acat.value = num;
  calcule();
};

const detailCat = (i) => {
  const { text, src } = cats[i];
  console.log(i, text);
  whatAbout.insertAdjacentHTML(
    "beforeend",
    `
    <div class="parg">
      <button onClick="supp(this.parentElement)" >x</button>
      <div class="thatimage">
        <img src="${src}" />
      </div>
      <div class="thatlist">
        <h3>Name : ${text.name}</h3>
        <h3>Prix : ${text.prix}</h3>
        <h3>Kind : ${text.kind}</h3>
        <h3>Age : ${text.age}</h3>
      </div>
    </div>
  `
  );
};

catsItem.addEventListener("click", () => {
  elements.innerHTML = "";
  whatAbout.innerHTML = "";

  for (let i = 0; i < cats.length; i++) {
    let { src, name, kind, prix, text } = cats[i];

    elements.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="image">
          <img src="${src}"  />
        </div>
        <div class="details">
          <p class="txt"> ${name} </p>
          <span class="prix"> ${prix} $</span>
          
        </div>
        <div class="link">
          <button id="linkBtn" onClick="buycat(${i})" >Acheter</button>
          <button class="more" onClick="detailCat('${i}')" >More details</button>
        </div>
      </div>
      </br>
    `
    );
  }
});

const hasun = {
  src: "../res/bird-image/moknin.jfif",
  text: {
    name: "Hasun",
    prix: "50$",
    kind: "Bird",
    age: "2 year old",
  },
  name: "Hasun",
  prix: 25,
  kind: "bird",
};
const canari = {
  src: "../res/bird-image/canari.jfif",
  text: {
    name: "Canari",
    prix: "50$",
    kind: "Bird",
    age: "2 year old",
  },
  name: "Canari",
  prix: 50,
  kind: "bird",
};
const cockatiel = {
  src: "../res/bird-image/cockatiel.webp",
  text: {
    name: "Cockatiel",
    prix: "150$",
    kind: "Bird",
    age: "4 year old",
  },
  name: "Cockatiel",
  prix: 150,
  kind: "bird",
};
// const pirock = {
//   src: "../res/bird-image/pirock.jfif",
//   text: "Lorem ipsum dolor sit amet consectetur",
//   name: "Pirock",
//   prix: "40$",
//   kind: "bird",
// };
const pirock2 = {
  src: "../res/bird-image/pirock2.webp",
  text: {
    name: "Parrot",
    prix: "120$",
    kind: "Bird",
    age: "4 year old",
  },
  name: "Parrot",
  prix: 120,
  kind: "bird",
};
const green = {
  src: "../res/bird-image/green.jpg",
  text: {
    name: "Small-Parrot",
    prix: "40$",
    kind: "Bird",
    age: "2 year old",
  },
  name: "Small-Pirock",
  prix: 20,
  kind: "bird",
};
const owl = {
  src: "../res/bird-image/owl.jpg",
  text: {
    name: "High-Owl",
    prix: "50$",
    kind: "Bird",
    age: "5 year old",
  },
  name: "High-Owl",
  prix: 50,
  kind: "bird",
};
const fast = {
  src: "../res/bird-image/fast.jpg",
  text: {
    name: "Falcon",
    prix: "70$",
    kind: "Bird",
    age: "6 year old",
  },
  name: "Falcon",
  prix: 70,
  kind: "bird",
};
const birdfood1 = {
  src: "../res/bird-image/food1.jpg",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const birdfood = {
  src: "../res/bird-image/birdfood.jfif",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const birdfood2 = {
  src: "../res/bird-image/birdfood2.jpg",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const birdfood3 = {
  src: "../res/bird-image/birdfood3.jpg",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "Fast",
  prix: 10,
  kind: "food",
};
const gardbirdfood = {
  src: "../res/bird-image/gardbirdfood.webp",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "Fast",
  prix: 10,
  kind: "bird",
};
const gardbirdfood2 = {
  src: "../res/bird-image/gardbirdfood2.webp",
  text: {
    name: "Food",
    prix: "10$",
    kind: "Bird-food",
    age: "",
  },
  name: "food",
  prix: 10,
  kind: "food",
};
const birds = [
  hasun,
  canari,
  cockatiel,
  pirock2,
  green,
  owl,
  fast,
  birdfood,
  birdfood1,
  birdfood2,
  birdfood3,
  gardbirdfood2,
];
const buybird = (i) => {
  const { prix } = birds[i];
  let num = 0;
  birdgeld.push(prix);
  birdgeld.map((el) => (num += el));
  abird.value = num;
  calcule();
};

const detailBird = (i) => {
  const { text, src } = birds[i];
  console.log(i, text);
  whatAbout.insertAdjacentHTML(
    "beforeend",
    `
    <div class="parg">
      <button onClick="supp(this.parentElement)" >x</button>
      <div class="thatimage">
        <img src="${src}" />
      </div>
      <div class="thatlist">
        <h3>Name : ${text.name}</h3>
        <h3>Prix : ${text.prix}</h3>
        <h3>Kind : ${text.kind}</h3>
        <h3>Age : ${text.age}</h3>
      </div>
    </div>
  `
  );
};

birdsItem.addEventListener("click", () => {
  elements.innerHTML = "";
  whatAbout.innerHTML = "";
  for (let i = 0; i < birds.length; i++) {
    let { src, name, kind, prix, text } = birds[i];

    elements.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="image">
          <img src="${src}"  />
        </div>
        <div class="details">
          <p class="txt"> ${name} </p>
          <span class="prix">${prix} $</span>
          
        </div>
        <div class="link">
          <button id="linkBtn" onClick="buybird(${i})">Acheter</button>
          <button class="more" onClick="detailBird('${i}')" >More details</button>
        </div>
      </div>
      </br>
    `
    );
  }
});

const fish = {
  src: "../res/fish-images/fish.png",
  text: {
    name: "Fish",
    prix: "20$",
    kind: "fish",
    age: "",
  },
  name: "Fish",
  prix: 20,
  kind: "fish",
};
const greena = {
  src: "../res/fish-images/green.jpg",
  text: {
    name: "Green",
    prix: "40$",
    kind: "fish",
    age: "",
  },
  name: "Green",
  prix: 40,
  kind: "fish",
};
const red = {
  src: "../res/fish-images/red.jpg",
  text: {
    name: "Red",
    prix: "25$",
    kind: "fish",
    age: "",
  },
  name: "Red",
  prix: 25,
  kind: "fish",
};
const orange = {
  src: "../res/fish-images/orange.webp",
  text: {
    name: "Orange",
    prix: "25$",
    kind: "fish",
    age: "",
  },
  name: "Orange",
  prix: 25,
  kind: "fish",
};
const nofikha = {
  src: "../res/fish-images/nofikha.jpg",
  text: {
    name: "Nofikha",
    prix: "50$",
    kind: "fish",
    age: "",
  },
  name: "Nofikha",
  prix: 50,
  kind: "fish",
};
const yellow = {
  src: "../res/fish-images/yellow.jfif",
  text: {
    name: "Yellowh",
    prix: "25$",
    kind: "fish",
    age: "",
  },
  name: "Yellow",
  prix: 25,
  kind: "fish",
};
const zebre = {
  src: "../res/fish-images/zebre.jpg",
  text: {
    name: "Zebra",
    prix: "45$",
    kind: "fish",
    age: "",
  },
  name: "Zebra",
  prix: 45,
  kind: "fish",
};
const douda = {
  src: "../res/fish-images/douda.jfif",
  text: {
    name: "Douda",
    prix: "1$",
    kind: "fish-food",
    age: "",
  },
  name: "Douda",
  prix: 1,
  kind: "fish-food",
};
const fishfood = {
  src: "../res/fish-images/fishfood.webp",
  text: {
    name: "Fish-food",
    prix: "10$",
    kind: "fish-food",
    age: "",
  },
  name: "Fish-food",
  prix: 10,
  kind: "fish-food",
};
const fishfood1 = {
  src: "../res/fish-images/fishfood1.jfif",
  text: {
    name: "Fish-food1",
    prix: "5$",
    kind: "fish-food",
    age: "",
  },
  name: "Fish-food1",
  prix: 5,
  kind: "fish-food",
};
const hunt = {
  src: "../res/fish-images/hunt.webp",
  text: {
    name: "Hunt-fish",
    prix: "7$",
    kind: "fish-food",
    age: "",
  },
  name: "Hunt-fish",
  prix: 7,
  kind: "fish-food",
};
const zina = {
  src: "../res/fish-images/zina.jfif",
  text: {
    name: "Zina-fish",
    prix: "8$",
    kind: "fish-zina",
    age: "",
  },
  name: "Zina-fish",
  prix: 8,
  kind: "fish-zina",
};

const fishes = [
  fish,
  greena,
  red,
  orange,
  nofikha,
  yellow,
  zebre,
  douda,
  fishfood,
  fishfood1,
  hunt,
  zina,
];
const buyfish = (i) => {
  const { prix } = fishes[i];
  let num = 0;
  fishgeld.push(prix);
  fishgeld.map((el) => (num += el));
  afish.value = num;
  calcule();
};

const supp = (el) => el.remove();
const detailFish = (i) => {
  const { text, src } = fishes[i];
  console.log(i, text);
  whatAbout.insertAdjacentHTML(
    "beforeend",
    `
    <div class="parg">
      <button onClick="supp(this.parentElement)" >x</button>
      <div class="thatimage">
        <img src="${src}" />
      </div>
      <div class="thatlist">
        <h3>Name : ${text.name}</h3>
        <h3>Prix : ${text.prix}</h3>
        <h3>Kind : ${text.kind}</h3>
        <h3>Age : ${text.age}</h3>
      </div>
    </div>
  `
  );
};

fishesItem.addEventListener("click", () => {
  elements.innerHTML = "";
  whatAbout.innerHTML = "";

  for (let i = 0; i < fishes.length; i++) {
    let { src, name, kind, prix, text } = fishes[i];

    elements.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="image">
          <img src="${src}"  />
        </div>
        <div class="details">
          <p class="txt"> ${name} </p>
          <span class="prix">${prix} $</span>
          
        </div>
        <div class="link">
          <button id="linkBtn" onClick="buyfish(${i})" >Acheter</button>
          <button class="more" onClick="detailFish('${i}')" >More details</button>
        </div>
      </div>
      </br>
    `
    );
  }
});

// const tottal = (totalgeld) => {
//   let vald = adog.value;
//   let valc = acat.value;
//   let valb = abird.value;
//   let valf = afish.value;

//   let sum = 0;

//   totalgeld = [adog.value, acat.value, abird.value, afish.value];
//   totalgeld.map((el) => (sum += el));
//   atotal.value = sum;
// };
// tottal(totalgeld);
