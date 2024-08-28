// script.js
function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
