const resultElement = document.getElementById('result');

function appendCharacter(char) {
    resultElement.textContent += char;
}

function deleteCharacter() {
    resultElement.textContent = resultElement.textContent.slice(0, -1);
}

function clearResult() {
    resultElement.textContent = '';
}

function calculateResult() {
    try {
        resultElement.textContent = eval(resultElement.textContent);
    } catch (error) {
        resultElement.textContent = 'Error';
    }
}
