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

console.log(friends[11]);

// 2.) Sort the list of `friends` above in alphabetical order.

friends.sort()
console.log(friends)

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friendsTwo = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friendsThree = friendsTwo.split(',');
var friendsThreeSort = friendsThree.sort();

console.log(friendsThreeSort);

//4.) List all the `friends` above in reverse alphabetical order. 

var friendsFour = friendsThreeSort
friendsFour.reverse()
console.log(friendsFour)

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

let bothOfOurFriends = myFriends.concat(yourFriends);
console.log(bothOfOurFriends)
bothOfOurFriends.sort();
console.log(bothOfOurFriends);

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

var a = foods.indexOf('Pho')+1;
console.log(a)
console.log('Pho is ' + a + " in the favorites list")

// 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

var b = foods.indexOf('Donuts');

foods.splice(b);
console.log(foods)

// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

var fifthThruTenth = foods.splice(4,5,6,7,8,9);
console.log(fifthThruTenth);

// 9.) Change the word "Space" to the word "Spice".

let word = "Space";
changeWord();

function changeWord() {
    if (word = "Space") {
        word = "Spice"
    }
}
console.log(word);