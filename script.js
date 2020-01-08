function countIncome () {
    var value = document.getElementById("amountOfIncome").value
    var select = document.getElementById("select-incomeItem").value

    var transactionContainer = document.getElementById("page-container")
    
    var transaction = document.createElement("div")
    transaction.className = "page-item"
    transaction.innerHTML = select + " " + value
    transactionContainer.appendChild(transaction)

    var count = transactionContainer.childNodes.length - 1

    if (count > 4) {
        alert("cool")
    }
}

function countOutcome () {
    var value = document.getElementById("amountOfOutcome").value
    var select = document.getElementById("select-outcomeItem").value
    
    var transactionContainer = document.getElementById("page-container")
    var transaction = document.createElement("div")
    
    var transactionContainer = document.getElementById("page-container")
    var transaction = document.createElement("div")
    transaction.className = "page-item"
    transaction.innerHTML = select + " " + value
    transactionContainer.appendChild(transaction)

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