// const blok = document.querySelector("#blok");
// const button = document.querySelector("#btn");
// button &&
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     const title = document.createElement("p");
//     title.innerHTML = "salom dunyo";
//     title.setAttribute("class", "id");
//     title.setAttribute("id", "sarlavha");
//     blok.appendChild(title);
//     console.log(title);
//   });

const from = document.querySelector("#from");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const nationality = document.querySelector("nationalitym");
const description = document.querySelector("#description");
const button = document.querySelector("#button");

from &&
  from.addEventListener("sumbit", function (event) {
    event.preventDefault();
    console.Log(name.value);
    console.Log(age.value);
    console.Log(nationality.value);
    console.Log(description.value);
  });
