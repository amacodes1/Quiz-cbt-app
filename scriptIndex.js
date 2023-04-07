function test() {
    // Retrieving data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;    
    
    // Storing data
    var userId = localStorage.setItem("username", username);
    var emailId = localStorage.setItem("email", email);
    var passId = localStorage.setItem("password", password);
}