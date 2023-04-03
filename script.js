const form = document.getElementById("form");

form.addEventListener("submit", formEvent);
function formEvent(e) {
    e.preventDefault();
console.log(username.value);
console.log(password.value);
console.log("Form submitted");
}