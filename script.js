const mobileNavContainer = document.getElementById("mobile-nav-container");
const navOverlayWindow = document.getElementById("nav-overlay-window");
const mobileNavIcon = document.getElementById("mobile-nav-icon");
// const viewportWidth = window.innerWidth;

// show mobile container :
const showMobileNavContainer = () => {
  mobileNavContainer.className = "slide-in";
  navOverlayWindow.style.display = "block";
  mobileNavContainer.style.display = "flex";
};
mobileNavIcon.addEventListener("click", showMobileNavContainer);

// hide mobile container :
const hideMobileNavContainer = () => {
  navOverlayWindow.style.display = "none";
  mobileNavContainer.className = "slide-out";
  mobileNavContainer.addEventListener(
    "animationend",
    () => {
      mobileNavContainer.style.display = "none";
      mobileNavContainer.style.animation = "";
    },
    { once: true }
  );
};
navOverlayWindow.addEventListener("click", hideMobileNavContainer);
