function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  btn: document.querySelector('.change-color'),
  body: document.body,
  span: document.querySelector('.color'),
}
ref.btn.addEventListener('click', handleClickBtn)

function handleClickBtn() {
  const color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.span.textContent = color;
}