window.onload = function() {

    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Retrieve user data from local storage
        var storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            showMessage("Login successful!", "success");
            // Redirect to the home page or perform any other necessary action
            console.log("logged in")
            document.getElementById("home");

        } else {
            showMessage("Invalid username or password", "error");
            console.log("Invalid user")
        }

        // Reset the form
        document.getElementById("login-form").reset();
    });

    function showMessage(message, type) {
        var messageElement = document.getElementById("message");
        messageElement.textContent = message;
        messageElement.className = type;
    }
}