const mobileNavContainer = document.getElementById("mobile-nav-container");
const navOverlayWindow = document.getElementById("nav-overlay-window");
const mobileNavIcon = document.getElementById("mobile-nav-icon");
const letterEffectText = document.getElementById("letter-effect-text");
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

// random letter effect animation func :
const randomLetterEffect = (element) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&^+=-.";
  const targetText = "Hello.";
  let currentIndex = 0;
  const displayLetter = () => {
    let id = setInterval(() => {
      const randomLetter =
        characters[Math.floor(Math.random() * characters.length)];
      element.textContent =
        element.textContent.slice(0, currentIndex) + randomLetter;
      if (randomLetter == targetText[currentIndex]) {
        clearInterval(id);
        element.textContent =
          element.textContent.slice(0, currentIndex) + targetText[currentIndex];
        currentIndex++;
      }
    }, 30);
  };
  for (let i = 0; i < targetText.length; i++) {
    displayLetter();
  }
};
randomLetterEffect(letterEffectText);
