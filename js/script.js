document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const productsContainer = document.querySelector(".products-container");
    
    function loadMenuItem(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                productsContainer.innerHTML = data;
            })
            .catch(error => console.error("Error loading content:", error));
    }

    const defaultMenu = document.querySelector(".menu-item").getAttribute("data-page");
    loadMenuItem(defaultMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const page = this.getAttribute("data-page");
            loadMenuItem(page);
        });
    });

    document.querySelector(".nav-button[href='#menu']").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".menu-bar").scrollIntoView({ behavior: "smooth" });
    });
});
