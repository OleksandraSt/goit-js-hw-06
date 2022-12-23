const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    textOutput.textContent = textInput.value.trim();
    if (textInput.value === '') {
        textOutput.textContent = 'Anonymous'
    };
    console.log(textOutput);
});