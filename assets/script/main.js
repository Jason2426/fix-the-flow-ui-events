let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button 1 (Double Click Event)

let frontend = document.querySelector('#first')

frontend.addEventListener("dblclick", function() {
  frontend.classList.add("changeColor");
} )

// Button 2 
