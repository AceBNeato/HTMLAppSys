//UPDATE ORDER ACCEPT:DECLINE
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".accept-btn, .decline-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr"); // Find the parent row
            let orderId = row.id;
            let isAccepted = this.classList.contains("accept-btn");

            updateOrder(orderId, isAccepted);
        });
    });
});

function updateOrder(orderId, isAccepted) {
    let row = document.getElementById(orderId);
    if (!row) {
        console.error("Row not found:", orderId);
        return;
    }

    let orderName = row.querySelector(".order-name").innerText;
    let orderImg = row.querySelector(".order-img").src;
    let orderDate = row.querySelector(".order-date").innerText;
    let orderTime = row.querySelector(".order-time").innerText;
    let buttons = row.querySelectorAll("button");

    let status = isAccepted ? "Pending" : "Declined";

    row.classList.add(isAccepted ? "accepted" : "declined");

    // Disable buttons
    buttons.forEach(button => button.disabled = true);

    // Store in localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        id: orderId,
        name: orderName,
        img: orderImg,
        date: orderDate,
        time: orderTime,
        status: status
    });
    localStorage.setItem("orders", JSON.stringify(orders));
}





    
function openModal(title, desc, imgSrc) {
    console.log("Opening modal with image:", imgSrc); // Debugging step

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;

    // Check if image path is valid
    let imgElement = document.getElementById("modal-img");
    imgElement.src = imgSrc;
    imgElement.onerror = function () {
        console.error("Image failed to load:", imgSrc);
        imgElement.src = "/images/default-placeholder.png"; // Fallback image
    };

    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}



//REPORTS
document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    renderOrders("all"); // Default to All Orders
});

function renderOrders(filter) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let reportsTable = document.getElementById("reports-table");
    reportsTable.innerHTML = "";

    let filteredOrders = orders.filter(order => {
        if (filter === "all") return true;
        return order.status.toLowerCase() === filter;
    });

    if (filteredOrders.length === 0) {
        reportsTable.innerHTML = "<tr><td colspan='5'>No orders available</td></tr>";
        return;
    }

    filteredOrders.forEach(order => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${order.img}" width="45"></td>
            <td>${order.name}</td>
            <td>${order.date}</td>
            <td>${order.time}</td>
            <td>${order.status}</td>
        `;
        reportsTable.appendChild(row);
    });
}

function showOrders(filter) {
    renderOrders(filter);
}
