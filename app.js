var billAmountRef = document.querySelector("#input-bill-amount");
var cashGivenRef = document.querySelector("#input-cash-given");
var btnCalculateRef = document.querySelector("#btn-calculate");
var divOutput = document.querySelector("#div-output");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnCalculateRef.addEventListener("click", clickHandler);

function clickHandler() {
  var billAmount = billAmountRef.value;
  var cashGiven = cashGivenRef.value;

  if (cashGiven > billAmount) {
    calculate(billAmount, cashGiven);
  } else {
    divOutput.innerText = "Error";
  }
}

function calculate(billAmount, cashGiven) {
  var returnAmount = cashGiven - billAmount;

  for (let i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount = returnAmount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
