var bgcolor;

function red() {
  bgcolor = 'red'
  localStorage.setItem('color', bgcolor)
  SetColor();
}

function blue() {
  bgcolor = 'blue'
  localStorage.setItem('color', bgcolor)
  SetColor();
}

window.addEventListener('load', SetColor)

function SetColor() {
  bgcolor = localStorage.getItem('color')
  document.body.style.backgroundColor = bgcolor
}