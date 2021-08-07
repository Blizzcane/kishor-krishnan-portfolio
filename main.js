const topReveal = {
  delay: 500,
  origin: "top",
  distance: "10px",
  duration: 1000,
};
const rightReveal = {
  delay: 1000,
  origin: "right",
  distance: "100px",
  duration: 1200,
};
const leftReveal = {
  delay: 1000,
  origin: "left",
  distance: "100px",
  duration: 1200,
};
const flyUp = {
    delay: 800,
    origin: "bottom",
    distance: "100px",
    duration: 1500,
  };
ScrollReveal().reveal(".flyUp", flyUp);
ScrollReveal().reveal(".flyUp2", {
    delay: 1000,
    origin: "bottom",
    distance: "100px",
    duration: 1500,
  });
ScrollReveal().reveal(".headline", topReveal);
ScrollReveal().reveal(".menu", topReveal);
ScrollReveal().reveal(".header", {
  delay: 300,
  duration: 1000,
  origin: "top",
  distance: "5px",
});
ScrollReveal().reveal(".right-reveal", rightReveal);
ScrollReveal().reveal(".left-reveal", leftReveal);
