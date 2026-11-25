/* ==============================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Close navigation when clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.innerHTML = "☰";
    });
});


/* ==============================
   MENU FILTERING
================================ */

const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        foodCards.forEach(function (card) {

            const foodCategory = card.getAttribute("data-category");

            if (category === "all" || foodCategory === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* ==============================
   TABLE BOOKING
================================ */

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const bookingDate = document.getElementById("bookingDate");

// Prevent choosing past dates
const today = new Date().toISOString().split("T")[0];
bookingDate.setAttribute("min", today);

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;

    if (!name || !email || !phone || !guests || !date || !time) {
        bookingMessage.style.color = "#ff8080";
        bookingMessage.textContent = "Please fill in all required fields.";
        return;
    }

    bookingMessage.style.color = "#9df5b2";

    bookingMessage.innerHTML =
        "🎉 Thank you, " + name +
        "! Your reservation request for " +
        guests + " on " + date +
        " at " + time +
        " has been submitted successfully!";

    bookingForm.reset();

    // Reset minimum booking date after form reset
    bookingDate.setAttribute("min", today);

});


/* ==============================
   FOOTER YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ==============================
   WELCOME MESSAGE
================================ */

console.log("Welcome to Savoria Restaurant Website!");
console.log("Website created using HTML, CSS and JavaScript.");