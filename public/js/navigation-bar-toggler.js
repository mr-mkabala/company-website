let prevScrollpos = window.pageYOffset; // ile pikseli do dołu przescrollowana jest strona
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { // sprawdza czy obecna pozycja scrolla jest mniejsza od początkowej
    document.querySelector('.navigation-bar').style.top = "0";
  } else {
    document.querySelector('.navigation-bar').style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}