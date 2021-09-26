const cp = document.querySelector("#cp");
const qty = document.querySelector("#qty");
const sp = document.querySelector("#sp");
const fireBtn = document.querySelector("#fire");
const output = document.querySelector("#output");

function clickEventHandler() {

  let qtyVal = Number(qty.value);
  let costP = Number(cp.value) * qtyVal;
  let sellP = Number(sp.value) * qtyVal;

  let res = sellP - costP;
  res = res.toFixed(2);

  let per = (res / costP) * 100;

  per = per.toFixed(2);

  if (res > 0) {
    output.innerHTML = `You have earned a profit of : +$${res} <br > with a percentage profit of : ${per}%</span>`;
  } else if (res == 0) {
    output.innerHTML = "No pain no gain no gain no pain";
  } else {
    output.innerHTML = `<span style="color: red">You lost: -$${-res} <br >with loss percentage being: ${per}%</span>`;
  }

}

fireBtn.addEventListener("click", clickEventHandler);