import { DBank, dbank1_backend } from "../../declarations/dbank1_backend";

window.addEventListener("load", async function () {
  const currentAmount = await dbank1_backend.checkBalance();
  document.getElementById("value").innerText = currentAmount;
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  button.setAttribute("disabled",true);
  if(document.getElementById("input-amount").value != 0){
    await dbank1_backend.topUp(inputAmount);
  }
  if(document.getElementById("withdrawal-amount").value != 0){
    await dbank1_backend.withdrawl(outputAmount);
  }
  const currentAmount = await dbank1_backend.checkBalance();
  document.getElementById("value").innerText = currentAmount;
  button.removeAttribute("disabled");
});
