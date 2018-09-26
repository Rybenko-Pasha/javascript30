// ## Array Cardio Day 2
const people = [{
  name: 'Wes',
  year: 1988
},
{
  name: 'Kait',
  year: 1986
},
{
  name: 'Irv',
  year: 1970
},
{
  name: 'Lux',
  year: 2015
}]

const comments = [{
  text: 'Love this!',
  id: 523423
},
{
  text: 'Super good',
  id: 823423
},
{
  text: 'You are the best',
  id: 2039842
},
{
  text: 'Ramen is my fav food ever',
  id: 123523
},
{
  text: 'Nice Nice Nice!',
  id: 542328
}]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const findOneNineteenOlder = people.some(elem => new Date().getFullYear() - elem.year >= 19)

console.log({ findOneNineteenOlder })

// Array.prototype.every() // is everyone 19 or older?
const findAllNineteenOlders = people.every(elem => new Date().getFullYear() - elem.year >= 19)

console.log(findAllNineteenOlders)
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findElemById = comments.find(elem => elem.id === 823423)

console.log(findElemById)
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const findElemByIndex = comments.findIndex(elem => {
  return elem.id === 823423
})

const newComments = comments
  .slice(0, findElemByIndex)
  .concat(comments
    .slice(findElemByIndex + 1))

console.log(newComments)
