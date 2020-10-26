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
  console.log(friends[11]);


//   2.) Sort the list of friends above in alphabetical order.

friends.sort();
console.log(friends);


// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.


var friendss = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var friendsArray = friendss.split(',');
console.log(friendsArray);
friendsArray.sort();
console.log(friendsArray);

// 4.) List all the friends above in reverse alphabetical order.

friendsArray.reverse();
console.log(friendsArray);


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

let ourFriends = myFriends.concat(yourFriends);
console.log(ourFriends);
ourFriends.sort();
console.log(ourFriends);


// 6.) I have a list of favorite foods below. If Popcorn is my favorite food and Potato chips my second favorite, then how would you find the rank of another food? Try finding the rank of Pho.


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

//   The favorite food ranking is in order, so index of 0 is the favorite and 1 is second favorite. Therefore the index+1 is the nth favorite food.

let pho = (foods.indexOf('Pho')+1);
console.log(pho);
console.log(foods[9] + " is " + pho + " in the food rankings.")

// 7.) I made a mistake with my favorite foods. How can I find the index of Donuts and remove it? (Hint: look up splice)

foods.splice(foods.indexOf('Donuts'));
console.log(foods);

// 8.) My friends want to know what my 5th to 10th favorite foods are. How would I find these foods?

// To find the index the food is to subtract 1 from the ranking, the index for 5th is 4 and 8th is 7.

console.log("The 5th favorite food is " + foods[4] + " and the 8th favorite food is " + foods[7] + ".");

// 9.) Change the word "Space" to the word "Spice".

let word = "Space";
if (word !== "Spice"){
    word = "Spice"
    
}
console.log(word);

// 10.) BONUS - Here are a list of ages

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

ages.sort(function(a,b) {
    return a- b
});

console.log(ages)

let medianIndex = ages.length % 2 == 0 ? ((Math.ceil(ages.length/2)) + (Math.ceil(ages.length/2) -1))/2 : (Math.ceil(ages.length/2) -1);

console.log(ages[medianIndex]);




