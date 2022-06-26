
function countIncome () {
    var value = document.getElementById("amountOfIncome").value
    var select = document.getElementById("select-incomeItem").value
    
    var transactionSectionForAdd = document.getElementById("transaction-section").lastElementChild

    var transactionContainer = document.getElementById("page-container")
    var transactionSection = document.getElementById("transaction-section")
    
    if (transactionSectionForAdd.childNodes.length + 1 >= 4) {
        var previousSublings = document.querySelector(".page-container_active")
        previousSublings.classList.remove("page-container_active")
        var pageContainer = document.createElement("div")
        pageContainer.className = "page-container page-container_active"
        pageContainer.id = "page-container"
        transactionSection.appendChild(pageContainer)
    } else {
        var transaction = document.createElement("div")
        transaction.className = "page-item"
        transaction.innerHTML = select + " " + value
        transactionSectionForAdd.appendChild(transaction)
    }
    

    var breadCrumbsContainer = document.getElementById("breadcrumbs-container")
    
    if (transactionSection.children.length > breadCrumbsContainer.children.length) {
        var breadcrumb = document.createElement("button")
        breadcrumb.className = "breadcrumbs-item"
        breadcrumb.setAttribute("onclick", 'whatButton(this);')
        breadcrumb.innerHTML = transactionSection.children.length
        breadCrumbsContainer.appendChild(breadcrumb)
    }

    var transactionContainer = document.getElementById("transaction-section")
    var previousSublings = document.querySelector(".page-container_active")

    previousSublings.classList.remove("page-container_active")
    transactionContainer.lastElementChild.classList.add("page-container_active")
    
    
}

function countOutcome() {
    var value = document.getElementById("amountOfOutcome").value
    var select = document.getElementById("select-outcomeItem").value

    var transactionSectionForAdd = document.getElementById("transaction-section").lastElementChild

    var transactionContainer = document.getElementById("page-container")
    var transactionSection = document.getElementById("transaction-section")

    if (transactionSectionForAdd.childNodes.length + 1 >= 4) {
        var previousSublings = document.querySelector(".page-container_active")
        previousSublings.classList.remove("page-container_active")
        var pageContainer = document.createElement("div")
        pageContainer.className = "page-container page-container_active"
        pageContainer.id = "page-container"
        transactionSection.appendChild(pageContainer)
    } else {
        var transaction = document.createElement("div")
        transaction.className = "page-item"
        transaction.innerHTML = select + " " + value
        transactionSectionForAdd.appendChild(transaction)
    }


    var breadCrumbsContainer = document.getElementById("breadcrumbs-container")

    if (transactionSection.children.length > breadCrumbsContainer.children.length) {
        var breadcrumb = document.createElement("button")
        breadcrumb.className = "breadcrumbs-item"
        breadcrumb.setAttribute("onclick", 'whatButton(this);')
        breadcrumb.innerHTML = transactionSection.children.length
        breadCrumbsContainer.appendChild(breadcrumb)
    }

    var transactionContainer = document.getElementById("transaction-section")
    var previousSublings = document.querySelector(".page-container_active")

    previousSublings.classList.remove("page-container_active")
    transactionContainer.lastElementChild.classList.add("page-container_active")

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


function whatButton(button) {
    //console.log("You clicked button with class " + button.className);
    //console.log("You clicked button with text " + button.innerText);
    var buttonNumber = Number(button.innerHTML)
    var transactionContainer = document.getElementById("transaction-section")
    var previousSublings = document.querySelector(".page-container_active")
    
    previousSublings.classList.remove("page-container_active")
    transactionContainer.children[buttonNumber - 1].classList.add("page-container_active")
}
