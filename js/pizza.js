// 1.) Find the last name in the following array:

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

console.log(friends[friends.length-1]);

// 2.) Sort the list of `friends` above in alphabetical order.

console.log(friends.sort());

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

const newFriends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

console.log(newFriends.split(',').sort());

// 4.) List all the `friends` above in reverse alphabetical order.

console.log(newFriends.split(',').sort().reverse());

// 5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.

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

console.log((myFriends.concat(yourFriends)).sort());

// 6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food? Try finding the rank of `Pho`.

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

console.log('To find the rank of any food, use indexOf on the foods array—plugging the name of the food into indexOf—then add one.');
console.log(foods.indexOf('Pho')+1);

// 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

const removed = foods.splice(foods.indexOf('Donuts'),1);
console.log(foods);

// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

const someFavorites = [];

for (let i = 4; i <= 9; i++) {
    someFavorites.push(foods[i]);
}

console.log(someFavorites);

// 9.) Change the word "Space" to the word "Spice".

let word = 'Space';
const letter = 'i';
const index = 2;
word = word.substring(0, index) + letter + word.substring(index + 1);

console.log(word);


// 10.) **BONUS** - Here are a list of `ages`


const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

const sortedAges = ages.sort();
const lengthOfAges = ages.length;
const medianIndex = Math.floor(lengthOfAges/2);
const median = sortedAges[medianIndex];

console.log(median);

// find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.