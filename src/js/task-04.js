let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterFilling = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue -=1;
    counterFilling.textContent = counterValue;
    console.log(counterValue);
});

incrementBtn.addEventListener('click', () => {
    counterValue +=1;
    counterFilling.textContent = counterValue;
    console.log(counterValue);
})

