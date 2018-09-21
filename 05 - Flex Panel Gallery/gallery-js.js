const panel = document.querySelectorAll('.panel')
panel.forEach(elem => {
  elem.addEventListener('click', toggleOpen)
  elem.addEventListener('transitionend', toggleActive)
})

function toggleActive (e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active')
}

function toggleOpen () {
  this.classList.toggle('open')
}
