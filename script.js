const usernameInput = document.getElementById("username");
const para = document.querySelector("p");
const email = document.querySelector("#email");
const search = document.querySelector("#search");
const button = document.querySelector("button");

let username = "";
let emailValue = "";
let searchValue = "";

usernameInput.addEventListener("input", (event) => {
  username = event.target.value;
  para.textContent = `Username : ${username}`;
});

email.addEventListener("input", (event) => {
  emailValue = event.target.value;
  para.textContent = `Email : ${emailValue}`;
});

search.addEventListener("input", (event) => {
  searchValue = event.target.value;
  para.textContent = `Search : ${searchValue}`;
});
