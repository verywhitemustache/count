function countIncome () {
    var value = document.getElementById("amountOfIncome").value
    var select = document.getElementById("select-incomeItem").value

    var transactionContainer = document.getElementById("page-container")
    var transactionSection = document.getElementById("transaction-section")
    var transactionSectionForAdd = document.getElementById("transaction-section").lastElementChild

    var breadCrumbsContainer = document.getElementById("breadcrumbs-container")

    var transaction = document.createElement("div")
    
    transaction.className = "page-item"
    transaction.innerHTML = select + " " + value
    transactionSectionForAdd.appendChild(transaction)
    
    
    
    if (transactionSectionForAdd.childNodes.length - 1   == 4) {
        var previousSublings = document.querySelector(".page-container_active")
        previousSublings.classList.remove("page-container_active")
        var pageContainer = document.createElement("div")
        pageContainer.className = "page-container page-container_active"
        pageContainer.id = "page-container"
        transactionSection.appendChild(pageContainer)
        
    }

    if (transactionSection.children.length > breadCrumbsContainer.children.length) {
        var breadcrumb = document.createElement("div")
        breadcrumb.className = "breadcrumbs-item"
        breadcrumb.innerHTML = transactionSection.children.length
        breadCrumbsContainer.appendChild(breadcrumb)
    }

    
}

function countOutcome () {
    var value = document.getElementById("amountOfOutcome").value
    var select = document.getElementById("select-outcomeItem").value
    
    var transactionContainer = document.getElementById("page-container")
    var transactionSection = document.getElementById("transaction-section")
    var transactionSectionForAdd = document.getElementById("transaction-section").lastElementChild

    var breadCrumbsContainer = document.getElementById("breadcrumbs-container")

    var transaction = document.createElement("div")
    
    transaction.className = "page-item"
    transaction.innerHTML = select + " " + value
    transactionSectionForAdd.appendChild(transaction)
    
    
    
    if (transactionSectionForAdd.childNodes.length - 1   == 4) {
        var previousSublings = document.querySelector(".page-container_active")
        previousSublings.classList.remove("page-container_active")
        var pageContainer = document.createElement("div")
        pageContainer.className = "page-container page-container_active"
        pageContainer.id = "page-container"
        transactionSection.appendChild(pageContainer)
        
    }
    
    if (transactionSection.children.length > breadCrumbsContainer.children.length) {
        var breadcrumb = document.createElement("div")
        breadcrumb.className = "breadcrumbs-item"
        breadcrumb.innerHTML = transactionSection.children.length
        breadCrumbsContainer.appendChild(breadcrumb)
    }

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