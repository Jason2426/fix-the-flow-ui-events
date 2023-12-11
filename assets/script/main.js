let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button 1 (Double Click Event)

let frontend = document.querySelector('#first')

frontend.addEventListener("dblclick", function () {
  frontend.classList.add("changeColor");
})

// Button 2 

let design = document.querySelector('.second')

design.addEventListener("focusin", function () {
  this.classList.add("changeColor");
})

// Button 3 

let and = document.querySelector('a[href="#and"]')

and.addEventListener("mouseover", function () {
  this.classList.add("changeWidth");
})







