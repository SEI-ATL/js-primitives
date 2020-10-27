// 1.) Find the last name in the following array:


// const friends = [
//   'Moe',
//   'Larry',
//   'Curly',
//   'Jane',
//   'Emma',
//   'Elizabeth',
//   'Elinor',
//   'Mary',
//   'Darcy',
//   'Grey',
//   'Lydia',
//   'Harriet'
// ];

// console.log(friends[friends.length - 1])

// 2.) Sort the list of `friends` above in alphabetical order.
// friends.sort()
// console.log(friends)
// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

// ```js
// var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

// let array = friends.split(',').sort();
// console.log(array);
// 4.) List all the `friends` above in reverse alphabetical order.
// console.log(array.reverse());
// 5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.


// const myFriends = [
//   'Rickon',
//   'Meera',
//   'Hodor',
//   'Jojen',
//   'Osha',
//   'Rickard',
//   'Maester',
//   'Rodrik',
//   'Jory',
//   'Septa',
//   'Jon'
// ];

// const yourFriends = [
//   'Bilbo',
//   'Boromir',
//   'Elrond',
//   'Faramir',
//   'Frodo',
//   'Gandalf',
//   'Legolas',
//   'Pippin'
// ];

// let combined = myFriends.concat(yourFriends).sort();
// console.log(combined)

// 6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food? Try finding the rank of `Pho`.

// const foods = [
//   'Popcorn',
//   'Potato chips',
//   'Shrimp',
//   'Chicken rice',
//   'Poutine',
//   'Tacos',
//   'Toast',
//   'French Toast',
//   'Crab',
//   'Pho',
//   'Lasagna',
//   'Brownie',
//   'Lobster',
//   'Donuts',
//   'Ice cream',
//   'Hamburger',
//   'Sushi',
//   'Chocolate',
//   'Pizza'
// ];

// console.log(foods.indexOf('Pho'));

// 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**
// let indexDonuts = foods.indexOf('Donuts');
// foods.splice(indexDonuts, 1)

// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?
// for (let i = 4; i < 9; i++) {
//     console.log(foods[i]);
// }

// 9.) Change the word "Space" to the word "Spice".


// let word = "Space";
// let newWord = word.replace('a', 'i')
// console.log(newWord)

// 10.) **BONUS** - Here are a list of `ages`


const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];


console.log(ages)
let med = Math.floor(ages.length / 2);
console.log(med);
if (ages.length % 2 === 1) {
    let median = ages[med];
    console.log(median);
} else {
    let median = (ages[med] + ages[med - 1]) / 2;
    console.log(median);
}
// find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.