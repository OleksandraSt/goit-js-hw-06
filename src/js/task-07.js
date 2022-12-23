const inputChange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputChange.addEventListener('input', e => {
    text.style.fontSize = `${e.target.value}px`
})
