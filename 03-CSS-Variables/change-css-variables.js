const inputs = document.querySelectorAll('.controls input')

inputs.forEach(elem => {
  elem.addEventListener('change', handleUpdate)
})
inputs.forEach(elem => {
  elem.addEventListener('mousemove', handleUpdate)
})

function handleUpdate () {
  const suffix = this.dataset.sizing || ''
  document.querySelector('html').style.setProperty(`--${this.name}`, this.value + suffix)
}
