document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        showMessage("Passwords do not match", "error");
        return;
    }

    // Save user data to local storage
    var user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));

    showMessage("Signup successful!", "success");
    alert(message);

    // Reset the form
    document.getElementById("signup-form").reset();
});

function showMessage(message, type) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = type;
}