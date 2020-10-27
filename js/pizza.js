//1. Find the last name in the following array.

// const friends = [
//     'Moe',
//     'Larry',
//     'Curly',
//     'Jane',
//     'Emma',
//     'Elizabeth',
//     'Elinor',
//     'Mary',
//     'Darcy',
//     'Grey',
//     'Lydia',
//     'Harriet'
//   ];

//   console.log(friends.pop());

//   //2.) Sort the list of `friends` above in alphabetical order.

//   console.log(friends.sort());

  //3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

//   var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

//   var newFriends = friends.split(',');
//   console.log(newFriends);

//   console.log(newFriends.sort());

//   4.) List all the `friends` above in reverse alphabetical order.
  
//   var aboveFriends = newFriends.sort();

//   console.log(aboveFriends.reverse());

//5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.

// const myFriends = [
//     'Rickon',
//     'Meera',
//     'Hodor',
//     'Jojen',
//     'Osha',
//     'Rickard',
//     'Maester',
//     'Rodrik',
//     'Jory',
//     'Septa',
//     'Jon'
//   ];
  
//   const yourFriends = [
//     'Bilbo',
//     'Boromir',
//     'Elrond',
//     'Faramir',
//     'Frodo',
//     'Gandalf',
//     'Legolas',
//     'Pippin'
//   ];

//   const ourFriends = myFriends.concat(yourFriends);

//   console.log(ourFriends);
//   console.log(ourFriends.sort());

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

 console.log(foods.indexOf('Popcorn'));
 console.log(foods.indexOf('Potato chips'));
 console.log(foods.indexOf('Pho'));
 
 //7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

 console.log(foods.indexOf('Donuts'));
 foods.splice(13, 1);
 console.log(foods.indexOf('Ice cream'));

 //8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

 console.log(foods.slice(5, 10));

//  9.) Change the word "Space" to the word "Spice".

let word = "Space";

console.log(word.replace("Space", "Spice"));