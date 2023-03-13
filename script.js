
let width = screen.width;
let email = document.getElementById("input");

if (width <= 800) {
  email.placeholder = "Your email address...";
} else {
  email.placeholder = "example@email/com";
}

function check() {
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let warning = document.getElementById("warning");

  if(email.value.match(format)) {
    warning.style.display = "none";
    email.style.borderColor = "var(--clr-secondary-100)";
  } else {
    warning.style.display = "initial";
    email.style.borderColor = "var(--clr-secondary-200)";
  }
}