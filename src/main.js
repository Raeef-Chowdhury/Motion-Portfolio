import { animate, hover, press, stagger, spring } from "motion";

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
