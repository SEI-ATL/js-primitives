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

//1
console.log(friends[friends.length-1]);
console.log(friends.pop(););

//2

console.log(friends.sort());

var friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

//3
console.log(friends2.split(',').sort());

//4

console.log(friends2.split(',').sort().reverse());

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

//5
const allFriends = myFriends + yourFriends;
console.log(allFriends.split(',').sort());

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

//6

console.log(foods.indexOf('Pho'));

//7

foods.splice(foods.indexOf('Donuts'), 1);
console.log(foods);

//8

console.log(foods.slice(4,9));

//9

foods.splice(foods.indexOf('Space'), 1, 'Spice');
console.log(foods);

//not sure what this question is asking for.

let word = "Space";
word = "Spice";

console.log(word);

///Bonus

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

const getMedian = (ages) =>{
    let ageSort = ages.sort();
    let mid = Math.floor(ages.length/2);

    if (ages.length %2 == 0) {
        return ageSort[mid];
    }
return (ageSort[mid-1] + ageSort[mid])/2;

}
console.log(getMedian(ages));