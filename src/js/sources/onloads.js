document.addEventListener("DOMContentLoaded", () => {
  var tabEl = document.querySelector('a[data-bs-target="#payment"]');
  var tabEl2 = document.querySelector('a[data-bs-target="#checkout"]');

  tabEl.addEventListener("shown.bs.tab", function (event) {
    event.target; // newly activated tab
    console.log("hi"); // previous active tab
    document.querySelector(".indicator .w-50").classList.add("w-75");
  });
  tabEl2.addEventListener("shown.bs.tab", function (event) {
    event.target; // newly activated tab
    console.log("hi"); // previous active tab
    document.querySelector(".indicator .w-50").classList.remove("w-75");
  });
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
