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
    home.toggle.classList("home");
    math.toggle.classList("math");
    sci.toggle.classList("sci");
    eng.toggle.classList("eng");
    ran.toggle.classList("ran");
    fun.toggle.classList("fun");
  } else {
    home.toggle.classList("homevalid");
  }
})};
mathb.addEventListener{"mousedown", function(e) {
  if (mathv === true) {
    home.toggle.classList("homevalid");
    math.toggle.classList("mathvalid");
    sci.toggle.classList("sci");
    eng.toggle.classList("eng");
    ran.toggle.classList("ran");
    fun.toggle.classList("fun");
  } else {
    math.toggle.classList("mathvalid");
  }
})};
scib.addEventListener{"mousedown", function(e) {
  if (sciv === true) {
    home.toggle.classList("homevalid");
    math.toggle.classList("math");
    sci.toggle.classList("scivalid");
    eng.toggle.classList("eng");
    ran.toggle.classList("ran");
    fun.toggle.classList("fun");
  } else {
    sci.toggle.classList("scivalid");
  }
})};
engb.addEventListener{"mousedown", function(e) {
  if (engv === true) {
    home.toggle.classList("homevalid");
    math.toggle.classList("math");
    sci.toggle.classList("sci");
    eng.toggle.classList("engvalid");
    ran.toggle.classList("ran");
    fun.toggle.classList("fun");
  } else {
    eng.toggle.classList("engvalid");
  }
})};
ranb.addEventListener{"mousedown", function(e) {
  if (ranv === true) {
    home.toggle.classList("homevalid");
    math.toggle.classList("math");
    sci.toggle.classList("sci");
    eng.toggle.classList("eng");
    ran.toggle.classList("ranvalid");
    fun.toggle.classList("fun");
  } else {
    ran.toggle.classList("ranvalid");
  }
})};
funb.addEventListener{"mousedown", function(e) {
  if (funv === true) {
    home.toggle.classList("homevalid");
    math.toggle.classList("math");
    sci.toggle.classList("sci");
    eng.toggle.classList("eng");
    ran.toggle.classList("ran");
    fun.toggle.classList("funvalid");
  } else {
    fun.toggle.classList("funvalid");
  }
})};
