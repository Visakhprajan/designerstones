var rtl_status = document.querySelector('html').getAttribute('dir');
var freeMode = false;
if (rtl_status == 'rtl') {
  freeMode = true;
}

AOS.init({
  disable:"mobile",
  easing:"ease-in-out",
  offset:0,
  delay:0,
  duration:800,
});