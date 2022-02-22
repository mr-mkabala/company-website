let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navigation-bar').style.top = "0";
  } else {
    document.querySelector('.navigation-bar').style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}