const main = document.getElementsByClassName("main")[0];
const username = document.getElementById("username");
const password = document.getElementById("password");

const usernamearea = document.getElementsByClassName("username-input-area")[0];
const passwordarea = document.getElementsByClassName("password-input-area")[0];

const loginButton = document.getElementById("loginBtn");

loginButton.addEventListener("click", function () {
  if (usernameValidation()) {
    document.getElementsByClassName("username-error")[0].innerHTML = "";
    usernamearea.classList.remove("highlight");

    if (passwordValidation()) {
      document.getElementsByClassName("password-error")[0].innerHTML = "";

      username.value = "";
      password.value = "";

      passwordarea.classList.remove("highlight");
      console.log("login successful!");
    }
  }
});

function usernameValidation() {
  console.log("Username:-", username.value);
  let msg = document.getElementsByClassName("username-error")[0];
  if (username.value === "") {
    msg.innerHTML = "This feild is required!";
    usernamearea.classList.add("highlight");
    return false;
  }

  return true;
}

function passwordValidation() {
  console.log("password:-", password.value);
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let msg = document.getElementsByClassName("password-error")[0];
  if (password.value === "") {
    msg.innerHTML = "This feild is required!";
    passwordarea.classList.add("highlight");
    return false;
  }
  if (!regex.test(password.value)) {
    msg.innerHTML = "Incorrect Password";
    passwordarea.classList.add("highlight");
    return false;
  }

  return true;
}

const resetlink = document.getElementsByClassName("forgot-password")[0];
const modal = document.getElementsByClassName("forgotpassword-modal")[0];

const closeButton = document.getElementById("closeBtn");
const resetButton = document.getElementById("resetBtn");

resetlink.onclick = function (event) {
  main.style.display = "none";
  modal.style.display = "block";
};

closeButton.onclick = function (event) {
  main.style.display = "block";
  modal.style.display = "none";
};

const email = document.getElementById("email");
const newPassword = document.getElementById("new-password");
const confirmPassword = document.getElementById("confirm-password");

const resetModal = document.getElementsByClassName("reset-password-modal")[0];

resetButton.onclick = function (event) {
  if (validateEmail()) {
    document.getElementsByClassName("email-text")[0].innerHTML = "";

    if (validateNewPassword()) {

      email.value="";
        newPassword.value="";
        confirmPassword.value="";
      document.getElementsByClassName("new-password-text")[0].innerHTML = "";

      let msg = document.getElementsByClassName("password-confirm-text")[0];
      if (newPassword.value === confirmPassword.value) {
        // msg.innerHTML = "password matched!";
        // msg.classList.add("success");

        main.style.display = "none";
        modal.style.display = "none";
        resetModal.style.display = "block";

        setTimeout(function () {
          resetModal.style.display = "none";
          main.style.display = "block";
        }, 3000);
      } else {
        msg.innerHTML = "password doesnt match!";
        msg.classList.add("error");
      }
    }
  }
};

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let msg = document.getElementsByClassName("email-text")[0];
  if (email.value === "") {
    msg.innerHTML = "This field is required!";
    msg.classList.add("error");
    return false;
  }
  if (!emailPattern.test(email.value)) {
    msg.innerHTML = "Enter a valid email!";
    msg.classList.add("error");
    return false;
  }
  console.log(email.value);
  return true;
}

function validateNewPassword() {
  let msg = document.getElementsByClassName("new-password-text")[0];

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/;
  if (newPassword.value === "") {
    msg.innerHTML = "This feild is required!";
    msg.classList.add("error");
    return false;
  }
  if (!regex.test(newPassword.value)) {
    msg.innerHTML =
      "Password must of altleast 8 characters containing atleast 1 uppercase letter,lowercase letter,digit,special character";
    msg.classList.add("error");
    return false;
  }
  console.log(newPassword.value);
  return true;
}
