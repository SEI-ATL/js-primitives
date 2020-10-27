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

let lastElement = friends[friends.length -1];
console.log(lastElement);


// 2.) Sort the list of `friends` above in alphabetical order.
console.log(friends.sort());


// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.
var friendsString = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
let newArray = friendsString.split(",");
console.log(newArray.sort());


// 4.) List all the `friends` above in reverse alphabetical order.
console.log(newArray.reverse());


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

const ourFriends = myFriends.concat(yourFriends);
console.log(ourFriends);


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

var pho = foods.indexOf("Pho");
console.log(pho);


// 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it?
var donuts = foods.indexOf("Donuts");
delete foods[9];
console.log(foods);


// ** 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?
let subArray = foods.slice(6, 11);
console.log(subArray);


// 9.) Change the word "Space" to the word "Spice".
let word = "Space";
let newWord = word.replace("Space", "spice");
console.log(newWord);


// 10.) **BONUS** - find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

console.log(ages.length);

const length = ages.length;
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges)
const mid = Math.ceil(length / 2);
console.log(mid);
//const median = sortedAges