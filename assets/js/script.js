document.addEventListener("DOMContentLoaded", function () {
    // Dark/Light Mode Toggle
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Dark Mode";
        } else {
            modeToggle.textContent = "Light Mode";
        }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
    
    // Dynamic Year Update
    document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Dynamic Year in Footer
    document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Dark Mode Toggle
    const modeToggle = document.getElementById("mode-toggle");

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change button text based on mode
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Dark Mode";
        } else {
            modeToggle.textContent = "Light Mode";
        }
    });
});
