//1.) Find the last name in the following array:

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

let lastEle = friends[friends.length -1];
  console.log('Last Name: ' + lastEle);

//2.) Sort the list of friends above in alphabetical order.

let sortAlpha = friends.sort();
console.log('Sorted Alphabetically: ' + sortAlpha);


//3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var secFriends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
  let sortedNames = secFriends.split(',').sort().join(',');
  console.log('Sorted Names: ' + sortedNames);

//4.) List all the friends above in reverse alphabetical order.

let reverseNames = secFriends.split(',').reverse().join(',');
  console.log('Names Reverse: ' + reverseNames);

//5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.

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

let allFriends = myFriends.concat(yourFriends).sort();
console.log('myFriends and yourFriends Sorted: ' + allFriends);

//6.) I have a list of favorite foods below. If Popcorn is my favorite food and Potato chips my second favorite, then how would you find the rank of another food? Try finding the rank of Pho.

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

let placement = foods.indexOf('Pho');
console.log('Pho is in the ' + placement + 'th slot.');

//7.) I made a mistake with my favorite foods. How can I find the index of Donuts and remove it? (Hint: look up splice)

let foodRemoved = foods.splice(foods.indexOf('Donuts'), 1);
console.log('The item that was removed was ' + foodRemoved + '.');

//8.) My friends want to know what my 5th to 10th favorite foods are. How would I find these foods?

const favs = foods.slice(5, 11);
  console.log(favs);

//9.) Change the word "Space" to the word "Spice".

let word = "Space";
  let newWord = word.replace("Space", "Spice");
  console.log(newWord);

//10.) BONUS - Here are a list of ages...find the median age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

const sum = ages.reduce((sum, val) => (sum += val));
const len = ages.length;
console.log(sum / len);