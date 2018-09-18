window.addEventListener('keydown', function (e) {
  playingSounds(e)
  removeTransitionFromButton()
})

function playingSounds (e) {
  const audioElem = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (audioElem) {
    audioElem.currentTime = 0
    audioElem.play()
  }
  if (key) {
    key.classList.add('playing')
  }
}

function removeTransitionFromButton () {
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => {
    key.addEventListener('transitionend', function (param) {
      if (param.propertyName === 'transform') {
        this.classList.remove('playing')
      }
    })
  })
}
