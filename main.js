const contS = document.getElementById("contS");
const contM = document.getElementById("contM");
const contH = document.getElementById("contH");
const contD = document.getElementById("contD");

let s = localStorage.getItem("s") || 0;
let m = localStorage.getItem("m") || 0;
let h = localStorage.getItem("h") || 0;
let d = localStorage.getItem("d") || 0;

if (localStorage.getItem("s") === null) {
  localStorage.setItem("s", s);
}
if (localStorage.getItem("m") === null) {
  localStorage.setItem("m", m);
}
if (localStorage.getItem("h") === null) {
  localStorage.setItem("h", h);
}
if (localStorage.getItem("d") === null) {
  localStorage.setItem("d", d);
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

  localStorage.setItem("s", s);
  localStorage.setItem("m", m);
  localStorage.setItem("h", h);
  localStorage.setItem("d", d);
}, 1000);
