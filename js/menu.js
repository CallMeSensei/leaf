function toggleMenu() {
    const menuContainer = document.querySelector(".menu-container-mobile");
    menuContainer.classList.toggle("active");
}

(function () {
    document.addEventListener("click", function (event) {
        if (!event.target.classList.contains("menu-container-mobile") && !event.target.classList.contains("menu-container")) {
            const menuContainer = document.querySelector(".menu-container-mobile");
            menuContainer.classList.remove("active");
        }
    });
})();
