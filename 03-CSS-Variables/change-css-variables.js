let inputs = document.querySelectorAll('.controls input')

function handleUpdate () {
  const suffix = this.dataset.sizing || ''
  document.querySelector('html').style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach((elem) => {
  elem.addEventListener('change', handleUpdate)
})
inputs.forEach((elem) => {
  elem.addEventListener('mousemove', handleUpdate)
})
