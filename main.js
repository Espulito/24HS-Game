const contS = document.getElementById("contS");
const contH = document.getElementById("contH");
const contD = document.getElementById("contD");

let s = localStorage.getItem("s") || 0;
let h = localStorage.getItem("h") || 0;
let d = localStorage.getItem("d") || 0;

if (localStorage.getItem("s") === null) {
  localStorage.setItem("s", s);
}
if (localStorage.getItem("h") === null) {
  localStorage.setItem("h", h);
}
if (localStorage.getItem("d") === null) {
  localStorage.setItem("d", d);
}

contS.innerHTML = s;
contH.innerHTML = h + ":";
contD.innerHTML = d + ":";

setInterval(() => {
  s++;

  if (s === 60) {
    s = 0;
    h++;
  }
  if (h === 60) {
    h = 0;
    d++;
  }
  if (d === 1) {
    document.querySelector(".contNums").style.color = "#65F080";
  }

  contS.innerHTML = s;
  contH.innerHTML = h + ":";
  contD.innerHTML = d + ":";

  localStorage.setItem("s", s);
  localStorage.setItem("h", h);
  localStorage.setItem("d", d);
}, 1000);
