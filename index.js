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
    math.classList.toggle("math");
    sci.classList.toggle("sci");
    eng.classList.toggle("eng");
    ran.classList.toggle("ran");
    fun.classList.toggle("fun");
  } else {
    home.classList.toggle("homevalid");
  }
})};
mathb.addEventListener{"mousedown", function(e) {
  if (mathv === true) {
    home.classList.toggle("homevalid");
    math.classList.toggle("mathvalid");
    sci.classList.toggle("sci");
    eng.classList.toggle("eng");
    ran.classList.toggle("ran");
    fun.classList.toggle("fun");
  } else {
    math.classList.toggle("mathvalid");
  }
})};
scib.addEventListener{"mousedown", function(e) {
  if (sciv === true) {
    home.classList.toggle("homevalid");
    math.classList.toggle("math");
    sci.classList.toggle("scivalid");
    eng.classList.toggle("eng");
    ran.classList.toggle("ran");
    fun.classList.toggle("fun");
  } else {
    sci.classList.toggle("scivalid");
  }
})};
engb.addEventListener{"mousedown", function(e) {
  if (engv === true) {
    home.classList.toggle("homevalid");
    math.classList.toggle("math");
    sci.classList.toggle("sci");
    eng.classList.toggle("engvalid");
    ran.classList.toggle("ran");
    fun.classList.toggle("fun");
  } else {
    eng.classList.toggle("engvalid");
  }
})};
ranb.addEventListener{"mousedown", function(e) {
  if (ranv === true) {
    home.classList.toggle("homevalid");
    math.classList.toggle("math");
    sci.classList.toggle("sci");
    eng.classList.toggle("eng");
    ran.classList.toggle("ranvalid");
    fun.classList.toggle("fun");
  } else {
    ran.classList.toggle("ranvalid");
  }
})};
funb.addEventListener{"mousedown", function(e) {
  if (funv === true) {
    home.classList.toggle("homevalid");
    math.classList.toggle("math");
    sci.classList.toggle("sci");
    eng.classList.toggle("eng");
    ran.classList.toggle("ran");
    fun.classList.toggle("funvalid");
  } else {
    fun.classList.toggle("funvalid");
  }
})};
