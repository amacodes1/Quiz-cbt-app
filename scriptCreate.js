const form = document.querySelector("#create-acc-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {

    validateForm();

    if (isFormValid() == true) {
        form.submit();
    } else {
        // event.preventDefault();
    }
});

function isFormValid() {
    const inputContainers = form.querySelectorAll(".input-group");
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains("error")) {
            result = false;
        }
    });
}

function validateForm() {
    // For Username
    if (usernameInput.value.trim() == "") {
        setError(usernameInput, "NAME CANNOT BE EMPTY");
    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, "NAME MUST BE MIN 5 AND MAX 15 CHARACTERS");
    } else {
        setSuccess(usernameInput);
    }
    // Email
    if (emailInput.value.trim() == "") {
        setError(emailInput, "PROVIDE EMAIL ADDRESS");
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, "PROVIDE VALID EMAIL ADDRESS");
    }
    // Password
    if (passwordInput.value.trim() == "") {
        setError(passwordInput, "PASSWORD CANNOT BE EMPTY");
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 25) {
        setError(passwordInput, "PASSWORD MUST BE MIN 6 AND MAX 25 CHARACTERS")
    } else {
        setSuccess(passwordInput);
    }
    // Confirm password
    if (confirmPasswordInput.value.trim() == "") {
        setError(confirmPasswordInput, "PASSWORD CANNOT BE EMPTY");
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, "PASSWORD DOES NOT MATCH");
    } else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains("success")) {
        parent.classList.remove("success");
    }
    parent.classList.add("error");
    const paragraph = parent.querySelector("p");
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains("error")) {
        parent.classList.remove("error");
    }
    parent.classList.add("success");
}

function isEmailValid(email) {
    const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
    return reg.test(email);
}