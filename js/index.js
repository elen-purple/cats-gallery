const cats = [
  {
    breed: "Мейн-кун",
    photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg/800px-%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg`,
  },
  {
    breed: "Британська короткошерста кішка",
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZIZdb-ognHJ78UnIibAnFG2IoMX_dAiMeW2SOaaWVJ0tJj483tJp6VpMuhWzSqWqFVGj0DZXaT6Lh7Zou9KS-A`,
  },
  {
    breed: "Сіамська кішка",
    photo: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTr0M-Tn9-pybbNQ8yair1dBi2ouhz5Gew9rUrgezo6hFmG6BZgxttga0MLE1VgGz4IDKYjcE8RUZZfY8w8FTaKA`,
  },
  {
    breed: "Перська кішка",
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGCqiKKRbu780iOz0OD3sPXgrB2pTpIqDW10EOTs4gvGEzt5VOvGLNo3QWP7NUX47HAOdvvecbdWgMgE9hhIbrF0g15SH-KztUYDu7Q`,
  },
  {
    breed: "Регдол",
    photo: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBrnKPNWPwi5k7Ivg6-KJqW3N7f6_KtM1I_kdO4koA5tMSbo0jRu-oFM8ZZ499GyK2NtDB6eznD_euY2PA9bC1tw`,
  },
  {
    breed: "Екзотична короткошерста кішка",
    photo: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnwnU4vE0qlqltT5ycd3FE5GcR86dNqCJ4sASsx1zL260GRzsaLANLte-_7Q9a7O-62wvK25ZnBOb5fdBCuzZhSQ`,
  },
  {
    breed: "Бірманська кішка",
    photo: `https://www.purina.ua/sites/default/files/styles/ttt_image_510/public/2024-01/sitesdefaultfilesstylessquare_medium_440x440public2022-06Birman-Cat-Breed.jpg?itok=6gFSny3R`,
  },
  {
    breed: "Бомбейська кішка",
    photo: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDAm8KTKJpNXukeqkmIX9UmC4TJftn83MDF6EWyzv138hnuwk9ScLG4bEESxB2Uzcn14LKt4-OeJ0avMnH7gQefg`,
  },
  {
    breed: "Норвезька лісова кішка",
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxjSe5EMnR5FeOVl8jkQzu_Qts-uAK213u6eiAojc9ne0paERLGR1Ew8KASFrzrcSey4Hn1yuUBfnSF5xbqe8uA`,
  },
];

// const listElement = document.createElement("ul");
// cats.forEach(({ breed, photo }) => {
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     `<li>
//         <article>
//             <h2>${breed}</h2>
//             <img src="${photo}" alt="${breed}" />
//         </article>
//     </li>`
//   );
// });
// console.log(listElement);

// document.querySelector("body").prepend(listElement);

const listElement = document.createElement("ul");
listElement.classList.add("list");
const catsLayout = cats.map(({ breed, photo }) => {
  const li = `<li class="list-item">
        <article class="list-article">
            <div class="list-wrapper">
                <img class="list-img" width="300" src="${photo}" alt="${breed}" />
            </div>
            <h2 class="list-subtitle">${breed}</h2> 
         </article>
     </li>`;
  return li;
});
console.log(catsLayout);

const catsList = catsLayout.join("");
listElement.insertAdjacentHTML("afterbegin", catsList);
document.querySelector("body").prepend(listElement);
listElement.insertAdjacentHTML(
  "beforebegin",
  `<h1 class="title">Галерея порід котів</h1>`
);
