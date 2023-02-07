var input = document.getElementById("inp");
let math = document.getElementById("math");
let mm = Math.floor(Math.random() * 9);

let inp = document.getElementById("input");

function ok() {
  if (mm == input.value) {
    let div = document.getElementById("con");
    o = `<h1>  CORRECT ✨</h1>`;
    div.id = "con";
    div.classList.add("con");
    div.innerHTML = o;
    let div1 = document.getElementById("cons");
    div1.append(div);
  } else {
    let div = document.getElementById("con");
    div.id = "con";
    o = `<h1>  WRONG 😕</h1>`;
    div.classList.add("con");
    div.innerHTML = o;
    let div1 = document.getElementById("cons");
    div1 = div;
  }
}

function kk() {
  inp.innerHTML = ` <h1> Your's : <b>${input.value}</b></h1>`;
  math.innerHTML = `<h1>Correct : <b>${mm}</b></h1>`;
  ok();

  input.value = "";
}
let btn = document.getElementById("btn");

btn.addEventListener("click", kk);
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    kk();
  }
});
