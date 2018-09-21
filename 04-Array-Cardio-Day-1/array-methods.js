// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenBorned = inventors.filter(elem => (elem.year >= 1500 && elem.year < 1600))
console.log(fifteenBorned)
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(elem => {
  return `${elem.first} ${elem.last}`
})
console.log(fullNames)
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortBirthDate = inventors.sort(function (a, b) {
  return b.year - a.year
})
console.table(sortBirthDate)
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const sumYears = inventors.reduce((sum, elem) => {
  return sum + (elem.passed - elem.year)
}, 0)
console.log(sumYears)
// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => {
  return (a.passed - a.year) - (b.passed - b.year)
})
console.table(yearsLived)
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/* const list = document.querySelector('.mw-category')
const listOfLinks = Array.from(list.querySelectorAll('a'))
const de = listOfLinks
  .map(link => link.textContent)
  .filter(link => link.toLowerCase().includes('de'))
console.log(de)
*/
// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort(function (first, second) {
  const [afirst, asecond] = first.split(', ')
  const [bfirst, bsecond] = second.split(', ')
  return asecond > bsecond ? -1 : 1
})
console.log(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transport = data.reduce(function (obj, elem) {
  if (!obj[elem]) obj[elem] = 0
  obj[elem]++
  return obj
}, {})

console.log(transport)
