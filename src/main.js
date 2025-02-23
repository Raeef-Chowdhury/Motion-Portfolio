import { animate, hover, press, stagger, spring } from "motion";
const profileImg = document.querySelector(".profile__img");
const tooltip = document.querySelector(".tooltip");
let intervalId;

function trackMousePosition(x, y) {
  tooltip.classList.remove("hidden");
  tooltip.style.left = `${x - 50}px`;
  tooltip.style.top = `${y - 50}px`;
}

function startTracking(event) {
  intervalId = setInterval(() => {
    trackMousePosition(event.clientX, event.clientY);
  }, 1000);
}

function stopTracking() {
  // Stop tracking when mouse leaves the element
  clearInterval(intervalId);
}

//Start tracking mouse on mouseenter, and stop on mouseleave
profileImg.addEventListener("mouseenter", (event) => startTracking(event));
profileImg.addEventListener("mousemove", (event) => {
  if (intervalId) {
    // Update the current mouse position each time mouse moves inside the element
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
      x: ["-10rem", "0rem"],
    },
    {
      duration: 1,
    }
  );
}

// Function to animate the tooltip out
function animateTooltipOut() {
  animate(
    tooltip,
    {
      opacity: [1, 0],
      filter: ["blur(0px)", "blur(5px)"],
      x: ["0rem", "-10rem"],
    },
    {
      duration: 1,
    }
  );
}

// Add hover event listener to profile image
profileImg.addEventListener("mouseenter", animateTooltipIn);

// Add mouseleave event listener to profile image
profileImg.addEventListener("mouseleave", animateTooltipOut);
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
// const leftElements = document.querySelectorAll(".left");

// animate(
//   leftElements,
//   {
//     opacity: [0, 1],
//     filter: ["blur(5px)", "blur(0px)"],
//     x: ["-100rem", "0rem"],
//     delay: stagger(0.2),
//   },
//   {
//     duration: 2, //
//     type: spring,
//     bounce: 0.2,
//   }
// );

// //
// hover(".box", (element) => {
//   animate(element, { scale: 1.3 }, { type: "spring" });
//   return () => animate(element, { scale: 1 }, { type: "spring" });
// });

// hover(".left", (element) => {
//   animate(element, {
//     scale: 1.05,
//     y: "-20px",
//   });
//   return () =>
//     animate(element, {
//       scale: 1,
//       y: "0px",
//     });
// });

// press(".left", (element) => {
//   animate(element, { scale: 0.9 });
//   return () => animate(element, { scale: 1 });
// });
