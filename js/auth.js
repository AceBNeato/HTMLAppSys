document.addEventListener("keydown", function (event) {
    // Detect "Ctrl + Shift + S"
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "s") {
        console.log("Admin shortcut detected!");
        
        // Store admin login status
        localStorage.setItem("userRole", "admin");

        // Show confirmation
        alert("Admin logged in via secret shortcut!");

        // Redirect to Admin Dashboard (Change the URL if needed)
        window.location.href = "/views/auth/admin-login.html";
    }
});








document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("admin-login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Allow only users to log in
            if (email === "admin@123" && password === "admin123") {
                sessionStorage.setItem("userRole", "admin");
                localStorage.setItem("userLoggedIn", "true");
                window.location.href = "../../../views/admin/admin-menu.html";
            } else {
                alert("Invalid login credentials. Admin access is not allowed.");
            }
        });
    }
});




/*USER LOGIN FORM*/

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("user-login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Allow only users to log in
            if (email === "user@123" && password === "user123") {
                sessionStorage.setItem("userRole", "user");
                localStorage.setItem("userLoggedIn", "true");
                window.location.href = "/views/home.html";
            } else {
                alert("Invalid login credentials.");
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("view-menu-button");
    const cartIcon = document.getElementById("cart-icon");
    const profileIcon = document.getElementById("profile-icon");

    // Check if the user is logged in
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    const userRole = sessionStorage.getItem("userRole");

    if (userLoggedIn === "true" && userRole === "user") {
        // Change "Get Started" button to "View Our Menu"
        getStartedBtn.innerText = "View Our Menu";
        getStartedBtn.href = "../views/menu.html";

        // Show Cart and Profile icons
        cartIcon.classList.remove("hidden");
        profileIcon.classList.remove("hidden");
    }
});












/* ========================== Logout Function ========================== */
function logout() {
    const userRole = sessionStorage.getItem("userRole");

    // Remove login data
    sessionStorage.removeItem("userRole");
    localStorage.removeItem("userLoggedIn");

    // Redirect based on user role
    if (userRole === "admin") {
        alert("Admin logged out successfully.");
        window.location.href = "/views/home.html"; // Admin login page
    } else {
        alert("User logged out successfully.");
        window.location.href = "/views/home.html"; // User login page
    }
}

// Attach logout function to logout buttons (if present)
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
});




