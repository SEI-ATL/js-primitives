// problem 1

let lastEle = friends[friends.length-1]
console.log(lastEle);

// problem 2

friends.sort();

// problem 3

let friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
let arr = friends.split(',');
arr.sort();

// problem 4

let friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
let arr = friends.split(',');
arr.sort();
let reverse = arr.sort();
reverse.reverse();

// problem 5

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
let ourFriends = myFriends.concat(yourFriends);
ourFriends.sort();

// problem 6

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

  function findRank(x) {
    return (foods.indexOf(x) + 1)
}
findRank('Pho');

// problem 7

function findIndex(x) {
    return (foods.indexOf(x))
}
let donut = findIndex('Donuts');
foods.splice(13, 0);

// problem 8

function findValues() {
    let food5 = foods[4]
    let food6 = foods[5]
    let food7 = foods[6]
    let food8 = foods[7]
    let food9 = foods[8]
    let food10 = foods[9]
    return [food5, food6, food7, food8, food9, food10];
}
findValues();

// problem 9

let word = "Space";
let newWord = word.replace('Space','Spice');
console.log(newWord);