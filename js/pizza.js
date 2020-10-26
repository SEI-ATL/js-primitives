
/* ******************************
#1 find the last name in the array 
********************************* */
const lastName = friends[friends.length - 1];
// console.log(lastName);

/* ******************************
#2 Sort the list into alphabetical order
********************************* */
const sortedFriends = friends.sort();
// console.log(sortedFriends);

/* ******************************
#3 Split string into an array then sort
********************************* */
const splitFriends = friendsString.split(",");
splitFriends.sort();
// console.log(splitFriends);

/* ******************************
#4 reverse friends list
********************************* */
const revFriends = splitFriends.sort((a, b) => -1);
// console.log(revFriends);

/* ******************************
#5 combine two arrays then sort
********************************* */
const allFriends = myFriends.concat(yourFriends).sort();
// console.log(allFriends);

/* ******************************
#6 find the rank of Pho in foods array
********************************* */
const phoRank = foods.indexOf("Pho") + 1;
// console.log(phoRank);

/* ******************************
#7 find and remove donuts from food array
********************************* */
foods.splice(foods.indexOf("Donuts"), 1);
// console.log(foods);

/* ******************************
#8 extract 5th through 10th elements in foods
********************************* */
const fiveThroughTen = foods.slice(4, 10);
// console.log(fiveThroughTen);

/* ******************************
#9 change space to spice
********************************* */
let word = "Space";
word = word.replace("a", "i");
// console.log(word);

/* ******************************
#10 BONUS: find median age in ages
********************************* */

const sortedAges = ages.sort();
const medianAge = sortedAges[(sortedAges.length + 1) / 2];
console.log(medianAge);