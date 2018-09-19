const secondArrow = document.querySelector('.second-hand')
const minutesArrow = document.querySelector('.min-hand')
const hourArrow = document.querySelector('.hour-hand')
const now = new Date()

clockInRealTime(now)

function setDate () {
  const now = new Date()
  clockInRealTime(now)
}

setInterval(setDate, 1000)

function clockInRealTime (e) {
  const seconds = e.getSeconds()
  const minutes = e.getMinutes()
  const hour = e.getHours()

  const secondsDegrees = (seconds / 60) * 360 + 90
  const minutesDegrees = (minutes / 60) * 360 + 90
  const hourDegrees = (hour / 12) * 360 + 90

  secondArrow.style.transform = `rotate(${secondsDegrees}deg)`
  minutesArrow.style.transform = `rotate(${minutesDegrees}deg)`
  hourArrow.style.transform = `rotate(${hourDegrees}deg)`
}
