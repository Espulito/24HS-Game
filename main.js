const contS = document.getElementById("contS");
const contM = document.getElementById("contM");
const contH = document.getElementById("contH");
const contD = document.getElementById("contD");

let s = localStorage.getItem("S") || 0;
let m = localStorage.getItem("M") || 0;
let h = localStorage.getItem("H") || 0;
let d = localStorage.getItem("D") || 0;

if (localStorage.getItem("S") === null) {
  localStorage.setItem("S", s);
}
if (localStorage.getItem("M") === null) {
  localStorage.setItem("M", m);
}
if (localStorage.getItem("H") === null) {
  localStorage.setItem("H", h);
}
if (localStorage.getItem("D") === null) {
  localStorage.setItem("D", d);
}

contS.innerHTML = s;
contM.innerHTML = m + ":";
contH.innerHTML = h + ":";
contD.innerHTML = d + ":";

setInterval(() => {
  s++;

  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }
  if (h === 24) {
    h = 0;
    d++;
  }
  if (d >= 1) {
    document.querySelector(".contNums").style.color = "#65F080";
  }

  contS.innerHTML = s;
  contM.innerHTML = m + ":";
  contH.innerHTML = h + ":";
  contD.innerHTML = d + ":";

  localStorage.setItem("S", s);
  localStorage.setItem("M", m);
  localStorage.setItem("H", h);
  localStorage.setItem("D", d);
}, 1000);
