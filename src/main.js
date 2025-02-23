import { animate, hover, press, stagger, spring } from "motion";
const profileImg = document.querySelector(".profile__img");
const tooltip = document.querySelector(".tooltip");
const heroEffects = document.querySelectorAll(".hero__effect");
const cursorBorder = document.querySelector(".cursor");
const body = document.querySelector("body");
/////////////////////////////////////////////////////////////////

let xPos;
let yPos;
document.addEventListener("mousemove", (event) => {
  xPos = event.pageX;
  yPos = event.pageY;
  cursorBorder.style.left = `${xPos + 4}px`;
  cursorBorder.style.top = `${yPos + 4}px`;
});
press(body, (element) => {
  animate(cursorBorder, { width: "24px", height: "24px" });

  return () => animate(cursorBorder, { width: "36px", height: "36px" });
});
//////////////////////////////////////////////////////////////////
let currentIndex = 0;
heroEffects.forEach((el, i) => {
  if (i === 0) {
    el.style.opacity = 1;
    el.style.transform = "translateY(0%)";
  } else {
    el.style.opacity = 0;
    el.style.transform = "translateY(100%)";
  }
});

function slideNext(currentIndex, heroEffects) {
  const currentSlide = heroEffects[currentIndex];
  const nextIndex = (currentIndex + 1) % heroEffects.length;
  const nextSlide = heroEffects[nextIndex];

  animate(
    currentSlide,
    {
      opacity: [1, 0],
      transform: ["translateY(0%)", "translateY(100%)"],
    },
    {
      duration: 1,
    }
  );
  animate(
    nextSlide,
    {
      opacity: [0, 1],
      transform: ["translateY(-100%)", "translateY(0%)"],
    },
    {
      duration: 1,
      easing: "ease-in-out",
    }
  );

  return nextIndex;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
animate(
  ".stagger",
  {
    opacity: [0, 1],
    filter: ["blur(5px)", "blur(0px)"],
    x: ["-50rem", "0rem"],
  },
  { delay: stagger(0.2), duration: 2, type: "spring", bounce: 0.3 }
);

animate(
  ".stagger__btn",
  {
    opacity: [0, 1],
    filter: ["blur(5px)", "blur(0px)"],
    x: ["-10rem", "0rem"],
    y: ["10rem", "0rem"],
  },
  { delay: stagger(0.2), duration: 2, type: "spring", bounce: 0.3 }
);
////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  currentIndex = slideNext(currentIndex, heroEffects);
}, 3000);
///////////////////////////////////////////////////////////////////////////////
hover(".btn__cta", (element) => {
  animate(element, {
    scale: 1.1,
    duration: 0.6,
    y: "-2rem",
  });
  return () =>
    animate(element, {
      scale: 1,
      duration: 0.6,
      y: "-0rem",
    });
});
////////////////////////////////////////////////////////////////////////////////////
let intervalId;

function trackMousePosition(x, y) {
  tooltip.classList.remove("hidden");
  tooltip.style.left = `${x - 50}px`;
  tooltip.style.top = `${y - 150}px`;
}

function startTracking(event) {
  intervalId = setInterval(() => {
    trackMousePosition(event.clientX, event.clientY);
  }, 3000);
}

function stopTracking() {
  clearInterval(intervalId);
}

profileImg.addEventListener("mouseenter", (event) => startTracking(event));
profileImg.addEventListener("mousemove", (event) => {
  if (intervalId) {
    trackMousePosition(event.clientX, event.clientY);
  }
});
profileImg.addEventListener("mouseleave", stopTracking);

function animateTooltipIn() {
  animate(
    tooltip,
    {
      opacity: [0, 1],
      filter: ["blur(5px)", "blur(0px)"],
      x: ["-2rem", "0rem"],
    },
    {
      duration: 1,
    }
  );
}
function animateTooltipOut() {
  animate(
    tooltip,
    {
      opacity: [1, 0],
      filter: ["blur(0px)", "blur(5px)"],
      x: ["0rem", "-2rem"],
    },
    {
      duration: 1,
    }
  );
}

profileImg.addEventListener("mouseenter", animateTooltipIn);

profileImg.addEventListener("mouseleave", animateTooltipOut);
animate(
  ".img__box",
  {
    opacity: [0, 1],
    filter: ["blur(5px)", "blur(0px)"],
    scale: [0, 1],
  },
  {
    duartion: 1.6,
    type: "spring",
    bounce: 0.2,
  }
);
///////////////////////////////////////////////////////////////////////////////////////////
hover(".navigation__item", (element) => {
  animate(element, {
    background: "#7c4726",
    color: "#fff",
    duration: 0.6,
  });
  return () =>
    animate(element, {
      background: "#0e0b08",
      color: "#d2ad95",
      duration: 0.6,
    });
});
hover(profileImg, (element) => {
  animate(element, {
    borderColor: "#7c4726",
    scale: 1.1,
  });
  return () =>
    animate(element, {
      borderColor: "#fff",
      scale: 1,
    });
});
hover(".nav__list--item", (element) => {
  animate(element, {
    scale: 1.3,
    duration: 0.6,
  });
  return () =>
    animate(element, {
      scale: 1,
      duration: 0.6,
    });
});
animate(
  ".header",
  {
    opacity: [0, 1],
    filter: ["blur(5px)", "blur(0px)"],
    y: ["-10rem", "0rem"],
  },
  {
    duartion: 1.6,
    type: "spring",
    bounce: 0.2,
  }
);
press(".nav__list--item", (element) => {
  animate(element, { scale: 0.8 });
  return () => animate(element, { scale: 1 });
});
