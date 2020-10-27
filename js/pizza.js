// Find the last name
const friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

console.log(friends[friends.length - 1])

// Sort the array alphabetically
console.log(friends.sort())

// Sort strings alphabetically
var friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'

console.log(friends2.split(',').sort().join())

// Sort strings in reverse alphabetical order
console.log(friends2.split(',').sort().reverse().join())


// Combine two arrays and sort
const myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

const yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

console.log(myFriends.concat(yourFriends).sort())


// Find the rank of Pho
const foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

foods.forEach((food, i) => {
  if (food === 'Pho') console.log(`Rank of Pho is ${i++}`)
})


// 7.) I made a mistake with my favorite foods.How can I find the index of`Donuts` and remove it ? ** (Hint: look up`splice`)**

foods.splice(foods.indexOf('Donuts'), 1)
console.log(foods)


// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

console.log(foods[4])
console.log(food[9])

// 9.) Change the word "Space" to the word "Spice".
let word = 'Space'
word = 'Spice'
