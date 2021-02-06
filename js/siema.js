let countPage = 0;

if (document.documentElement.clientWidth < 576) {
  countPage = 1;
} else if (
  document.documentElement.clientWidth > 576 &&
  document.documentElement.clientWidth < 767
) {
  countPage = 2;
}

const mySiema = new Siema({
  perPage: countPage,
});

console.log(mySiema);
