function countIncome () {
    var value = document.getElementById("amountOfIncome").value
    var select = document.getElementById("select-incomeItem").value
    console.log(value);
    console.log(select);
}
function countOutcome () {
    var value = document.getElementById("amountOfOutcome").value
    var select = document.getElementById("select-outcomeItem").value
    console.log(value);
    console.log(select);
}


function changeInputField () {
    var income = document.querySelector(".income-container")
    var outcome = document.querySelector(".outcome-container")
    
    var incomeDescription = document.querySelector(".incomeDescription")
    var outcomeDescription = document.querySelector(".outcomeDescription")

    income.classList.toggle("inactive")
    outcome.classList.toggle("inactive")
    
    incomeDescription.classList.toggle("active")
    outcomeDescription.classList.toggle("active")
  
} 