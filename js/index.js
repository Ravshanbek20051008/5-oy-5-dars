// vazifa
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
  function resetForm() {
    name.value = "";
    age.value = "";
    MobileNumber.value = "";
    EmailAddress.value = "";
    Password.value = "";
    ConfirmPassword.value = "";
    name.style.outline = "";
    age.style.outline = "";
    MobileNumber.style.outline = "";
    EmailAddress.style.outline = "";
    Password.style.outline = "";
    ConfirmPassword.style.outline = "";
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
  resetForm();
});

// wrapperni ichiga tushme qoldi
// agar vaqtiz bo'sa nima qilishni yozib qo'ysez o'g'nab qo'yaman
