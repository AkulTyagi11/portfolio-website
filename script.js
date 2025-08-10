document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    function updateNavbarBackground() {
      if (window.scrollY === 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "none";
      } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        navbar.style.backdropFilter = "blur(10px)";
      }
    }
  
    document.addEventListener("scroll", updateNavbarBackground);
    updateNavbarBackground(); // Initialize on page load
  });
