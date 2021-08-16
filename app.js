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
    output.innerHTML = `<span style="color: green">Profit : +$${res} <br >Percentage profit: ${per}%</span>`;
  } else if (res == 0) {
    output.innerHTML = "No profit or loss";
  } else {
    output.innerHTML = `<span style="color: red">Loss : -$${-res} <br >Percentage loss: ${per}%</span>`;
  }

}

fireBtn.addEventListener("click", clickEventHandler);