const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generator = document.getElementById("btnGenerator");

const finalPassword = document.getElementById("finalPassword");

generator.addEventListener("click", function () {
  let passwords = "";

  for (let index = 0; index < 14; index++) {
    let randomIndex = Math.floor(Math.random() * chars.length);

    passwords = passwords + chars[randomIndex];
  }

  finalPassword.textContent = passwords;
});

const clipboard = document.getElementById("clipboard");

clipboard.addEventListener("click", function () {
  let password = finalPassword.textContent;
  navigator.clipboard.writeText(password);
});
