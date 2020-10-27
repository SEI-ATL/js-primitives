// Exercise one

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

// const lastName = friends[friends.length -1]; 

// console.log(lastName);

// // Exercise two

// let alphabetical = friends.sort();
// console.log(alphabetical);

// // Exercise three

// var arr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
// let newArr = arr.split();

// console.log(newArr.sort());

// // Exercise four

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

//   let alphabetical = friends.sort();

// console.log(alphabetical.reverse())

// Exercise five

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

//   let combine = myFriends.concat(yourFriends);
//   console.log(combine.sort())



// Exercise 6


// const foods = [
//     'Popcorn',
//     'Potato chips',
//     'Shrimp',
//     'Chicken rice',
//     'Poutine',
//     'Tacos',
//     'Toast',
//     'French Toast',
//     'Crab',
//     'Pho',
//     'Lasagna',
//     'Brownie',
//     'Lobster',
//     'Donuts',
//     'Ice cream',
//     'Hamburger',
//     'Sushi',
//     'Chocolate',
//     'Pizza'
//   ];

//   var position = foods.indexOf('Pho');

  
//       console.log(position)

// Exercise seven

// const foods = [
//     'Popcorn',
//     'Potato chips',
//     'Shrimp',
//     'Chicken rice',
//     'Poutine',
//     'Tacos',
//     'Toast',
//     'French Toast',
//     'Crab',
//     'Pho',
//     'Lasagna',
//     'Brownie',
//     'Lobster',
//     'Donuts',
//     'Ice cream',
//     'Hamburger',
//     'Sushi',
//     'Chocolate',
//     'Pizza'
//   ];
  

//   var position = foods.indexOf('Donuts')
//   var newArr = (foods.splice(position, 1));

//   console.log(foods)


// const foods = [
//     'Popcorn',
//     'Potato chips',
//     'Shrimp',
//     'Chicken rice',
//     'Poutine',
//     'Tacos',
//     'Toast',
//     'French Toast',
//     'Crab',
//     'Pho',
//     'Lasagna',
//     'Brownie',
//     'Lobster',
//     'Donuts',
//     'Ice cream',
//     'Hamburger',
//     'Sushi',
//     'Chocolate',
//     'Pizza'
//   ];


  
//   curiousFriend = foods.splice(5, 6);

//   console.log(curiousFriend)

let word = 'space';

let arr = word.split("");

let newWord = arr.splice(2, 1, 'i');

console.log(word)