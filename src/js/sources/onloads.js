document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document.querySelectorAll(".dropdown").forEach(function (everydropdown) {
      everydropdown.addEventListener("hidden.bs.dropdown", function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = "none";
        });
      });
    });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
});
