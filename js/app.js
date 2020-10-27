//1. 
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
function findLast(people) {
let lastEle = friends[friends.length-1];
    return lastEle;
}
console.log(findLast(friends));

//2. 
friends.sort();
console.log(friends);

//3.
var people = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
  let sortedNames = people.split(',').sort().join(',');
  console.log('Sorted Names: ' + sortedNames);
//4.) List all the friends above in reverse alphabetical order.

let reverseNames = people.split(',').reverse().join(',');
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

//6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food? Try finding the rank of `Pho`.


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

//7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

let foodRemoved = foods.splice(foods.indexOf('Donuts'), 1);
console.log('The item that was removed was ' + foodRemoved + '.');


//8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?
const favs = foods.slice(5, 11);
    console.log(favs)


//9.)
var str = "Space";
var res = str.replace("Space", "spice");
console.log(res);

//10.)
const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
const sum = ages.reduce((sum, val) => (sum += val));
const len = ages.length;

console.log("average: ", sum / len);
