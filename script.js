function alertName() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    alert(`Hi ${name}!`);
  }
}

let isBlue = true;
function toggleColor() {
  document.body.style.backgroundColor = isBlue ? "green" : "lightblue";
  isBlue = !isBlue;
}

function validateText() {
  const input = document.getElementById("textInput").value;
  const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (validation.test(input)) {
    alert("Text contains special characters.");
  } else {
    alert("Text is valid!");
  }
}

function addText() {
  const heading = document.getElementById("main-heading");
  heading.textContent += " Add Text";
}
