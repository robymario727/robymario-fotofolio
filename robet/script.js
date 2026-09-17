// ==================== NAVBAR MOBILE ====================

// Mengambil elemen menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Memeriksa apakah elemen tersedia
if (menuToggle && navLinks) {

    // Membuka dan menutup menu
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Menutup menu saat link diklik
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}
