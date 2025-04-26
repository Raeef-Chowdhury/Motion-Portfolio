import { animate, hover, press, stagger, spring, inView } from "motion";
const profileImg = document.querySelector(".profile__img");
const tooltip = document.querySelector(".tooltip");
const heroEffects = document.querySelectorAll(".hero__effect");
const cursorBorder = document.querySelector(".cursor");
const body = document.querySelector("body");
const projectCards = document.querySelectorAll(".project");
console.log(body.clientHeight);
////////////////////////////////////////////////////////////////
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Animate hovered card
    animate(
      card,
      {
        y: -10,
        boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.2)",
        borderColor: "#ffffff",
      },
      {
        duration: 0.4,
        easing: "ease-out",
      }
    );

    // Dim all others
    projectCards.forEach((otherCard) => {
      if (otherCard !== card) {
        animate(otherCard, { opacity: 0.5 }, { duration: 0.3 });
      }
    });
  });

  card.addEventListener("mouseleave", () => {
    // Reset hovered card
    animate(
      card,
      {
        y: 0,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        borderColor: "#ffffff", // or back to Tailwind's default if customized
      },
      {
        duration: 0.4,
        easing: "ease-in",
      }
    );

    // Reset others
    projectCards.forEach((otherCard) => {
      animate(otherCard, { opacity: 1 }, { duration: 0.3 });
    });
  });
});
/////////////////////////////////////////////////////////////////
inView(
  ".scroll--left",
  (element) => {
    animate(
      element,
      { opacity: [0, 1], x: ["-50rem", 0], filter: ["blur(5px)", "blur(0px)"] },
      {
        duration: 2,
        easing: [0.17, 0.55, 0.55, 1],
        type: "spring",
      }
    );
  },
  {
    once: true,
  }
);
inView(
  ".scroll--down",
  (element) => {
    animate(
      element,
      { opacity: [0, 1], scale: [0, 1], filter: ["blur(5px)", "blur(0px)"] },
      {
        duration: 2,
        easing: [0.17, 0.55, 0.55, 1],
        type: "spring",
      }
    );
  },
  {
    once: true,
  }
);

inView(
  ".scroll__right",
  (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
        x: ["50rem", 0],
        filter: ["blur(5px)", "blur(0px)"],
      },
      {
        duration: 2,
        easing: [0.17, 0.55, 0.55, 1],
        type: "spring",
      }
    );
  },
  {
    once: true,
  }
);
////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const updatePosition = (event) => {
  // Get the correct mouse position from the event (clientX, clientY)
  const xPos = event.clientX; // clientX and clientY are relative to the viewport
  const yPos = event.clientY;

  // Set the cursor border position relative to the mouse
  cursorBorder.style.left = `${xPos + 4}px`;
  cursorBorder.style.top = `${yPos + 4}px`;

  console.log(xPos, yPos); // For debugging
};
////////////////////////////////////////////////////////////////////////////////
hover(".more__img", (element) => {
  animate(".img__reveal", {
    y: "-22rem",
    opacity: 1,
    visibility: "visible",
  });

  return () =>
    animate(
      ".img__reveal",
      { y: "0rem", opacity: 0, visibility: "hidden", border: "none" },
      {
        duration: 3,
        type: "spring",
        ease: "linear",
      }
    );
});
///////////////////////////////////////////////////////////////////////////////
// Listen for both mousemove and wheel events and update cursor position
document.addEventListener("mousemove", updatePosition);
document.addEventListener("wheel", updatePosition);
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
// animate(
//   ".stagger",
//   {
//     opacity: [0, 1],
//     filter: ["blur(5px)", "blur(0px)"],
//     x: ["-20rem", "0rem"],
//   },
//   { delay: stagger(0.3), duration: 1, type: "spring", bounce: 0.2 }
// );
inView(
  ".stagger",
  (element) => {
    animate(
      ".stagger",
      {
        opacity: [0, 1],
        filter: ["blur(5px)", "blur(0px)"],
        x: ["-20rem", "0rem"],
      },
      { delay: stagger(0.3), duration: 0.6, type: "spring", bounce: 0.2 }
    );
  },
  {
    once: true,
  }
);
animate(
  ".stagger__btn",
  {
    opacity: [0, 1],
    filter: ["blur(5px)", "blur(0px)"],
    x: ["-2rem", "0rem"],
    y: ["2rem", "0rem"],
  },
  { delay: stagger(0.4), duration: 2, type: "spring", bounce: 0.3 }
);
////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  currentIndex = slideNext(currentIndex, heroEffects);
}, 3000);
//////////////////////////////////////////////////////////////////////////////

press(".btn__profile", (element) => {
  animate(element, { scale: 0.7 });
  return () => animate(element, { scale: 1 });
});

hover(".btn__profile", (element) => {
  animate(element, {
    scale: 1.2,
    duration: 0.6,
  });
  return () =>
    animate(element, {
      scale: 1,
      duration: 0.6,
    });
});
/////////////////////////////////////////////////////////////////////////////

hover(".profile__language", (element) => {
  const projectContainer = element.closest(".project");
  console.log(projectContainer);
  const siblings = projectContainer.querySelectorAll(".profile__languages");

  siblings.forEach((sibling) => {
    if (sibling !== element) {
      animate(sibling, { scale: 0.8, duration: 0.3 });
    }
  });

  animate(element, {
    scale: 1.2,
    duration: 0.3,
    y: ["-0rem", "-2rem"],
    backgroundColor: "#f96731",
  });

  return () => {
    animate(element, {
      scale: 1,
      duration: 0.3,
      y: "-0rem",
      backgroundColor: "#0e0b08",
    });

    siblings.forEach((sibling) => {
      if (sibling !== element) {
        animate(sibling, { scale: 1, duration: 0.3 });
      }
    });
  };
});
///////////////////////////////////////////////////////////////////////////////
hover(".btn__cta", (element) => {
  animate(element, {
    scale: 1.1,
    duration: 2,
    y: ["-0rem", "-1rem"],
    skew: "-10deg",
  });
  return () =>
    animate(element, {
      scale: 1,
      duration: 2,
      y: "-0rem",
      skew: "0deg",
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
