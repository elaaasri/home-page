const mobileNavContainer = document.getElementById("mobile-nav-container");
const navOverlayWindow = document.getElementById("nav-overlay-window");
const mobileNavIcon = document.getElementById("mobile-nav-icon");
const homeSecondDescDiv = document.getElementById("home-second-desc");
const firstGreetingDiv = document.getElementById("first-greeting");
const allProjects = document.querySelectorAll(".project");

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
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX.YZ#%&^+=-'., ";
  const targetText = "I'm elaaasri, I'm a developer.";
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
    }, 25);
  };
  targetText.split("").forEach(() => displayLetter());
};
// random letter effect event :
setTimeout(() => {
  randomLetterEffect(homeSecondDescDiv);
}, 3000);

// type writer effect animation func :
const typeWriterEffect = (element) => {
  // element.style.visibility = "visible";
  const targetText = "HEY, I'M ANAS ELASRI 👋, WELCOME TO MY CREATIVE CORNER.";
  targetText.split("").forEach((letter, index) => {
    setTimeout(() => {
      element.textContent += letter;
    }, index * 250);
  });
};
// type writer effect event :
setTimeout(() => {
  typeWriterEffect(firstGreetingDiv);
}, 6000);

// add animate class to an element as soon it cross the viewport:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      targetElement.classList.add("animate");
    }
  });
});
// observer event :
allProjects.forEach((project) => observer.observe(project));
