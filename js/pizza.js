

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
// //find last name in array
const lastName = friends[friends.length - 1];
console.log(lastName);

// //sort in alphabetical order
const alphaOrder = friends.sort();
console.log(alphaOrder);

// sort in alphabetical order
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newArray = friends.split(",");
console.log(newArray);
const newAlphabet = newArray.sort();
console.log(newArray.sort());

// sort in reverse alphabetical
const reverse = newAlphabet.reverse();


//make a new array of both lists and alphabetize
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

  const allFriends = myFriends.concat(yourFriends);
  const onceMore = allFriends.sort();
  console.log(onceMore);

  //find index of pho
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

const found = foods.findIndex(element => element === 'Pho');
console.log(found);

//find index of donuts and remove it 
const donuts = foods.findIndex(element => element === 'Donuts');
console.log(donuts);
const removeDonuts = foods.splice(13, 1);
console.log(foods);

//find 5th-10th foods
let fiveThruTen = foods.slice(5, 11);
console.log(fiveThruTen);

// change space to spice
let word = "Space";
if (word === "Space") {
    let word = "Spice"
    console.log(word);
};

//find median

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

const middle = ages[Math.floor(ages.length / 2)];
console.log(middle);