function getInputValue(fieldId) {
    let inputField = document.getElementById(fieldId);
    let valueInText = inputField.value;
    let value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId) {
    let fieldTag = document.getElementById(fieldId);
    let fieldValueInText = fieldTag.innerText;
    let value = parseFloat(fieldValueInText);
    return value;

}

function updateTotal(fieldId, amount) {
    let totalTag = document.getElementById(fieldId);
    let previousTotalInText = totalTag.innerText;
    let previousTotal =  parseFloat(previousTotalInText);
    let newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
}

function updateBalance(amount, isAdding) {
    let balanceTag = document.getElementById('balance-total');
    let balanceInText = balanceTag.innerText;
    let previousBalance = parseFloat(balanceInText);
    let newBalance ;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}
// deposit handle
document.getElementById('deposit-button').addEventListener('click', function() {
    let amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})
// withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    let amount = getInputValue('withdraw-input');
    let balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});