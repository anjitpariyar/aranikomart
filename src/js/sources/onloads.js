document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("main").classList.contains("checkout--page")) {
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
  }
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

  // modal close and open
  const signupModal = document.getElementById("modal--signup");
  const loginModal = document.getElementById("modal--login");
  var myModal = new bootstrap.Modal(loginModal, {
    keyboard: false,
  });
  var mySignupModal = new bootstrap.Modal(signupModal, {
    keyboard: false,
  });

  signupModal.addEventListener("show.bs.modal", function (event) {
    myModal.hide(loginModal);
  });
  loginModal.addEventListener("show.bs.modal", function (event) {
    mySignupModal.hide(signupModal);
  });
  var toastTrigger = document.getElementById("liveToastBtn");
  var toastLiveExample = document.getElementById("liveToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", function () {
      var toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    });
  }
});
