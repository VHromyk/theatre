let countPage = 0;

if (document.documentElement.clientWidth < 576) {
  countPage = 1;
} else if (
  document.documentElement.clientWidth > 576 &&
  document.documentElement.clientWidth < 767
) {
  countPage = 2;
} else if (
  document.documentElement.clientWidth > 768 &&
  document.documentElement.clientWidth < 1919
) {
  countPage = 3;
} else {
  countPage = 4;
}

const mySiema = new Siema({
  selector: ".large-slider",
  perPage: countPage,
});

console.log(mySiema);

const myNewSiema = new Siema({
  selector: ".front-carousel",
  duration: 200,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
});
