function updateCaseNumber(IsIncreasing) {
    const caseInput = document.getElementById("case-number");
    let caseNumber = caseInput.value;
    if (IsIncreasing == true) {
        caseNumber.value = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber.value = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //Update Case Total
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = caseNumber * 59;
}

document.getElementById("case-plus").addEventListener("click", function() {
    updateCaseNumber(true);
});

document.getElementById("case-minus").addEventListener("click", function() {
    updateCaseNumber(false);
});