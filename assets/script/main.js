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

// Button 2 (focusin, with tab)

let design = document.querySelector('.second')

design.addEventListener("focusin", function () {
  this.classList.add("changeColor");
})

// Button 3 (Mouse over / Hover)

let and = document.querySelector('a[href="#and"]')

and.addEventListener("mouseover", function () {
  this.classList.add("changeWidth");
})

// Button 4 (Keyup 4/ tab to element then press 4)

let development = document.querySelector('a[href="#development"]')

development.addEventListener("keyup", function (Event) {
  console.log()
  if (Event.key == "4") {
    this.classList.add("changeColor", "changeWidth",);
  }
})

// Button 5 open window.

let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', function () {
    window.open('https://tenor.com/en-GB/view/sonic-run-speed-running-sonic-the-hedgehog-gif-15756844')
  });

