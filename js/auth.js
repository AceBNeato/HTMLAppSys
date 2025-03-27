document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const cartIcon = document.getElementById("cart-icon");
    const profileIcon = document.getElementById("profile-icon");
    const navMenu = document.getElementById("nav-menu");

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("userLoggedIn");

    if (isLoggedIn) {
        // Hide login button
        if (loginButton) loginButton.classList.add("hidden");

        // Show Cart and Profile icons
        cartIcon.classList.remove("hidden");
        profileIcon.classList.remove("hidden");

        // Create Logout Button
        const logoutButton = document.createElement("a");
        logoutButton.href = "#";
        logoutButton.textContent = "Logout";
        logoutButton.classList.add("nav-button");

        // Append Logout Button
        navMenu.appendChild(logoutButton);

        // Logout Functionality
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("userLoggedIn");
            window.location.href = "/views/home.html"; // Reload page to update UI
        });
    }
});






document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (!loginForm) {
        console.error("Login form not found!");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate login (replace with real authentication later)
        localStorage.setItem("userLoggedIn", "true");

        // Redirect to home page
        window.location.href = "/views/home.html";
    });
});









