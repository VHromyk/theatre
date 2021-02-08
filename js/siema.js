const widthWiewPort = document.documentElement.clientWidth;

if (widthWiewPort < 576) {
  countPage = 1;
} else if (widthWiewPort > 576 && widthWiewPort < 767) {
  countPage = 2;
} else if (widthWiewPort > 768 && widthWiewPort < 1919) {
  countPage = 3;
} else {
  countPage = 4;
}

console.log(countPage);
const mySiema = new Siema({
  selector: ".large-slider",
  perPage: countPage,
});

const ourPerformance = new Siema({
  selector: ".our-performance-carousel",
  duration: 200,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
  perPage: {
    576: 1.3, // 2 items for viewport wider than 800px
    730: 1.6, // 2 items for viewport wider than 800px
    1240: 1.9, // 3 items for viewport wider than 1240px
    2100: 4.5, // 3 items for viewport wider than 1240px
    2200: 5.5, // 3 items for viewport wider than 1240px
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
});
