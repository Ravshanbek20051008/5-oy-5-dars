// // const blok = document.querySelector("#blok");
// // const button = document.querySelector("#btn");
// // button &&
// //   button.addEventListener("click", function (event) {
// //     event.preventDefault();
// //     const title = document.createElement("p");
// //     title.innerHTML = "salom dunyo";
// //     title.setAttribute("class", "id");
// //     title.setAttribute("id", "sarlavha");
// //     blok.appendChild(title);
// //     console.log(title);
// //   });

// // const form = document.querySelector("#from");
// // const name = document.querySelector("#name");
// // const age = document.querySelector("#age");
// // const nationality = document.querySelector("nationalitym");
// // const description = document.querySelector("#description");
// // const button = document.querySelector("#button");

// // from &&
// //   from.addEventListener("sumbit", function (event) {
// //     event.preventDefault();
// //     console.Log(name.value);
// //     console.Log(age.value);
// //     console.Log(nationality.value);
// //     console.Log(description.value);
// //   });

// //   vazifa

// const form = document.querySelector("#from");
// const title = document.querySelector("#title");
// const title_p = document.querySelector("#title_p");
// const name = document.querySelector("#name");
// const age = document.querySelector("#age");
// const MobileNumber = document.querySelector("#MobileNumber");
// const EmailAddress = document.querySelector("#EmailAddress");
// const Password = document.querySelector("#Password");
// const ConfirmPassword = document.querySelector("#ConfirmPassword");
// const title_h3 = document.querySelector("#title_h3");
// const button = document.querySelector("#button");

// function validate() {
//   /* bu berilgan vj rathod lar hindcha ekan yosh
//  bosa kerak deb oylab olib ketordim */
//   if (name.value.length > 3) {
//     alert("ism 3 ta belgidan kam bolmasin");
//     name.focus();
//     name.style.outLineColor = "red";
//     return false;
//   }
//   if (age.value < 0 || age.value > 150) {
//     alert("yosh bunday qiymat qabul qilmaydi");
//     age.focus();
//     age.style.outLineColor = "red";
//     return false;
//   }
//   if (MobileNumber.value < 0 || MobileNumber.value > 150) {
//     alert("yosh bunday qiymat qabul qilmaydi");
//     MobileNumber.focus();
//     MobileNumber.style.outLineColor = "red";
//     return false;
//   }
//   if (EmailAddress.value.length < 5) {
//     alert("yosh bunday qiymat qabul qilmaydi");
//     EmailAddress.focus();
//     EmailAddress.style.outLineColor = "red";
//     return false;
//   }
//   if (Password.value < 0 || Password.value > 15) {
//     alert("yosh bunday qiymat qabul qilmaydi");
//     Password.focus();
//     Password.style.outLineColor = "red";
//     return false;
//   }
//   if (ConfirmPassword.value < 0 || ConfirmPassword.value > 15) {
//     alert("yosh bunday qiymat qabul qilmaydi");
//     ConfirmPassword.focus();
//     ConfirmPassword.style.outLineColor = "red";
//     return false;
//   }
//   return true;
// }
// function createCard(user) {
//   let card = document.createElement("div");
//   card.setAttribute("card");
//   const nameElement = document.createElement("h3");
//   nameElement.innerHTML = user.name;
//   card.appendChild(nameElement);
//   const ageElement = document.createElement("h3");
//   ageElement.innerHTML = user.age;
//   card.appendChild(ageElement);
//   const MobileNumberElement = document.createElement("h3");
//   MobileNumberElement.innerHTML = user.MobileNumber;
//   card.appendChild(MobileNumberElement);
//   const EmailAddressElement = document.createElement("h3");
//   EmailAddressElement.innerHTML = user.EmailAddress;
//   card.appendChild(EmailAddressElement);
//   const PasswordElement = document.createElement("h3");
//   PasswordElement.innerHTML = user.Password;
//   card.appendChild(PasswordElement);
//   const ConfirmPasswordelement = document.createElement("h3");
//   ConfirmPasswordelement.innerHTML = user.ConfirmPassword;
//   card.appendChild(ConfirmPasswordelement);
//   return card;
// }
// button &&
//   button.addEventListener("sumbit", function (event) {
//     event.preventDefault();
//     const isValid = validate();
//     if (!isValid) {
//       return;
//     }

//     let user = {
//       name: name.value,
//       age: age.value,
//       MobileNumber: MobileNumber.value,
//       EmailAddress: EmailAddress.value,
//       Password: Password.value,
//       ConfirmPassword: ConfirmPassword.value,
//     };
//     let card = createCard(user);
//     wrapper.appenChild(card);
//     console.log("validatsiyadan o'ttingiz");
//   });

// // button &&
// //   button.addEventListener("sumbit", function (event) {
// //     event.preventDefault();
// //   });
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const title_p = document.querySelector("#title_p");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const MobileNumber = document.querySelector("#MobileNumber");
const EmailAddress = document.querySelector("#EmailAddress");
const Password = document.querySelector("#Password");
const ConfirmPassword = document.querySelector("#ConfirmPassword");
const title_h3 = document.querySelector("#title_h3");
const button = document.querySelector("#button");
const wrapper = document.querySelector("#wrapper");

function validate() {
  if (name.value.length < 3) {
    alert("Ism 3 ta belgidan kam bo'lmasin");
    name.focus();
    name.style.outline = "2px solid red";
    return false;
  }
  if (age.value < 0 || age.value > 150) {
    alert("Yosh bunday qiymat qabul qilmaydi");
    age.focus();
    age.style.outline = "2px solid red";
    return false;
  }
  if (MobileNumber.value.length < 5 || MobileNumber.value.length > 15) {
    alert("Mobil raqam noto'g'ri kiritilgan");
    MobileNumber.focus();
    MobileNumber.style.outline = "2px solid red";
    return false;
  }
  if (EmailAddress.value.length < 5) {
    alert("Email manzili noto'g'ri kiritilgan");
    EmailAddress.focus();
    EmailAddress.style.outline = "2px solid red";
    return false;
  }
  if (Password.value.length < 6 || Password.value.length > 15) {
    alert("Parol 6 va 15 ta belgi oralig'ida bo'lishi kerak");
    Password.focus();
    Password.style.outline = "2px solid red";
    return false;
  }
  if (ConfirmPassword.value !== Password.value) {
    alert("Tasdiqlash paroli mos kelmadi");
    ConfirmPassword.focus();
    ConfirmPassword.style.outline = "2px solid red";
    return false;
  }
  return true;
}

function createCard(user) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  const nameElement = document.createElement("h3");
  nameElement.innerHTML = `Name: ${user.name}`;
  card.appendChild(nameElement);
  const ageElement = document.createElement("h3");
  ageElement.innerHTML = `Age: ${user.age}`;
  card.appendChild(ageElement);
  const MobileNumberElement = document.createElement("h3");
  MobileNumberElement.innerHTML = `Mobile Number: ${user.MobileNumber}`;
  card.appendChild(MobileNumberElement);
  const EmailAddressElement = document.createElement("h3");
  EmailAddressElement.innerHTML = `Email Address: ${user.EmailAddress}`;
  card.appendChild(EmailAddressElement);
  const PasswordElement = document.createElement("h3");
  PasswordElement.innerHTML = `Password: ${user.Password}`;
  card.appendChild(PasswordElement);
  const ConfirmPasswordElement = document.createElement("h3");
  ConfirmPasswordElement.innerHTML = `Confirm Password: ${user.ConfirmPassword}`;
  card.appendChild(ConfirmPasswordElement);
  return card;
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  const isValid = validate();
  if (!isValid) {
    return;
  }

  let user = {
    name: name.value,
    age: age.value,
    MobileNumber: MobileNumber.value,
    EmailAddress: EmailAddress.value,
    Password: Password.value,
    ConfirmPassword: ConfirmPassword.value,
  };
  let card = createCard(user);
  wrapper.appendChild(card);
  button.reset();
});
