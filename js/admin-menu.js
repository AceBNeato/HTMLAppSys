document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const productsContainer = document.querySelector(".products-container");

    function loadMenuItem(page) {
        console.log("Loading:", page); // Debugging: See what’s being loaded

        fetch(page)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                return response.text();
            })
            .then(data => {
                productsContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading menu:", error);
                productsContainer.innerHTML = `<p class="error">Failed to load menu items.</p>`;
            });
    }

    // Load default menu (first item)
    const firstMenuItem = document.querySelector(".menu-item");
    if (firstMenuItem) {
        loadMenuItem(firstMenuItem.getAttribute("data-page"));
    }

    // Attach event listeners for menu items
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            loadMenuItem(this.getAttribute("data-page"));
        });
    });

    // Ensure smooth scrolling (only if a nav button exists)
    const menuNavButton = document.querySelector(".nav-button[href='#menu']");
    if (menuNavButton) {
        menuNavButton.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".menu-bar").scrollIntoView({ behavior: "smooth" });
        });
    }
});
