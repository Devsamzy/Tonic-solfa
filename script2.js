const xa = [
      "Hi",
      "Welcome to tonic solfa",
      "I Am Tomide Olamigoke Samuel",
      "I Supply tonic solfas for people"
      ];
const xb = 500;
const xc = document.getElementById("typewriter");
let xd = 1;
let xe = 1;
let xr = false;

function type() {
  if (!xr) {
    xc.innerText = xa[xe].split('').splice(0, xd++).join('');
  } else {
    xc.innerText = xc.innerText.split('').splice(0, xd--).join('');
    if (xc.innerText.length == 0) {
      xr = false;
      xe++;
      if (xe == xa.length) {
        xe = 0;
      }
    }
  }
  if (xc.innerText.length == xa[xe].length) {
    xr = true;
  }
}
setInterval(type, 100);