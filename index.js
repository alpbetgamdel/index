var homeb, mathb, scib, engb, ranb, funb;
homeb = document.getElementById("homeb");
mathb = document.getElementById("mathb");
scib = document.getElementById("scib");
engb = document.getElementById("engb");
ranb = document.getElementById(ranb");
funb = document.getElementById("funb");
var home, math, sci, eng, ran, fun;
home = document.getElementById("home");
math = document.getElementById("math");
sci = document.getElementById("sci");
eng = document.getElementById("eng");
ran = document.getElementById("ran");
fun = document.getElementById("fun");
var homev, mathv, sciv, engv, ranv, funv;
homev = home.classList.contain("home");
mathv = home.classList.contain("math");
sciv = home.classList.contain("sci");
engv = home.classList.contain("eng");
ranv = home.classList.contain("ran");
funev = home.classList.contain("fun");
homeb.addEventListener{"mousedown", function(e) {
  if (homev === true) {
    home.classList.toggle("home");
  } else {
    home.classList.toggle("homevalid");
  }
})};
