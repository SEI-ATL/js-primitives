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

const lastListedName = friends[friends.length - 1];
console.log('Last listed name:', lastListedName, ', which should be: Harriet');

//2.) Sort the list of friends above in alphabetical order.

friends.sort();
console.log('\nAlphabetized friends list:', friends);

//3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friendsStr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
console.log('\nFriends string:', friendsStr);
console.log('Reverse alphabetical order:');
const friends2 = friendsStr.split(',').sort().reverse().join(',');
console.log(friends2);

//4.) List all the friends above in reverse alphabetical order.
console.log('\nList in reverse alphabetical order:')
for (i = friends.length - 1; i > 0; i--) {
    console.log(friends[i]);
}

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


const moreFriends = myFriends.concat(yourFriends);
moreFriends.sort();
console.log('\nCuz your friends are my friends, Concatenate and sorted friends:', moreFriends);

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

let index = foods.indexOf('Pho') + 1;
console.log('\nMy favorite foods are ranked by index');
console.log(`Pho is my ${index}th favorite food.`)

//7.) I made a mistake with my favorite foods. How can I find the index of Donuts and remove it? (Hint: look up splice)

let iDonut = foods.indexOf('Donuts');
foods.splice(iDonut, 1);
console.log('\n Removed Donuts:', foods);

//8.) My friends want to know what my 5th to 10th favorite foods are. How would I find these foods?

let subFaves = foods.slice(4, 10);
//note to self: slice includes the first but not the last
console.log('\n5th through 10th favorites:', subFaves);

//9.) Change the word "Space" to the word "Spice".
let word = "Space";
word = word.split('a').join('i');
//note to self - remember strings are immutable
console.log('\nSpace to Spice:', word);


//10.) BONUS find the median age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

ages.sort(function(a, b) { return a - b; });
//the above line found on w3schools.com
//apparently .sort looks at unicode indices which is why the default is alphabetical ascending
//to sort numerically you must use a comparator function
let ind = Math.floor(ages.length / 2) + 1;
let median = ages[ind];
console.log('\nThe median of: ', ages, `is ${median}`);