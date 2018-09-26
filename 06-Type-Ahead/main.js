const cities = []
const urlJson = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText)
    logJson(data)
  }
}
xhr.open('GET', urlJson, true)
xhr.send(null)

function logJson (param) {
  cities.push(...param)
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatch)
searchInput.addEventListener('change', displayMatch)

function findMatch (word, arr) {
  const rgx = new RegExp(word, 'gi')
  return arr.filter(place => {
    return place.city.match(rgx) || place.state.match(rgx)
  })
}

function displayMatch () {
  const matchArr = findMatch(this.value, cities)
  const htmlPlace = matchArr.map(elem => {
    const rgx = new RegExp(this.value, 'gi')
    const activeCityName = elem.city.replace(rgx, `<span class="hl">${this.value}</span>`)
    const activeStateName = elem.state.replace(rgx, `<span class="hl">${this.value}</span>`)
    return `<li>
      <span class="name">${activeCityName}, ${activeStateName}</span>
      <span class="population">${numberWithCommas(elem.population)}</span>
    </li>`
  })
  suggestions.innerHTML = htmlPlace.join('')
}

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
