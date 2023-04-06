const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const output = document.querySelector(".output");

form.addEventListener("login", formEvent);
function formEvent(e) {
    e.preventDefault();
console.log(username.value);
console.log(email.value);
console.log(password.value);
console.log("Form submitted");
}

// form.addEventListener("login", function(e) {
//     e.preventDefault();
//     if (username.value.length === 0) {
//         errorMessage.innerHTML = "Please enter your username";
//         errorMessage.style.color = "red";
//         errorMessage.style.fontSize = "1.9rem";
//         errorMessage.style.fontFamily = "roboto";

//         let info = {
//             username: username.value,
//             email: email.value,
//             password: password.value,
//         };

//         data.push(info);
//         localStorage.setItem("info", JSON.stringify(data));

//     }

// });

// let dataInfo = localStorage.getItem("info");
// let userDetails = JSON.parse(dataInfo);