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

// Organizing the array in aplahbetical order

let alphabetizedArray = friends.sort();

console.log(alphabetizedArray);
  



// Choosing the last element of the array*/

 let lastName = alphabetizedArray[alphabetizedArray.length - 1];
 console.log(lastName);// prints the last item in the array;

 
 //Reversing the 'friends' array
const newFriends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
const splitFriendsUp = newFriends.split(",")
console.log(splitFriendsUp);



//using "newFriends Constanst since we already have used this name on line 5"
reverseFriends = splitFriendsUp.reverse()
 console.log(reverseFriends);


//combine Arrays - then alphabetize...
 
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
// copy-pasting second array 
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

  const combinedArray = myFriends.concat(yourFriends);
  const alphabetizeCombinedArray = combinedArray.sort();
  console.log(alphabetizeCombinedArray);
 
//-----------------------------
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

  // finiding index of "Pho"
 
  var phoIndex = foods.indexOf("Pho");

  console.log(phoIndex);

  //Removing Donuts
  var phoDonutsIndex = foods.indexOf('Donuts');
  foods.splice(phoDonutsIndex, 1);
  console.log(foods);

//helping your friend find your favorute food

let helpFriend=foods.slice(4,9);
console.log(helpFriend);

//changing words
let word = "Space";
let arr = word.split("");
console.log(arr);
for(i=0; i < arr.length; i++){
    if(arr[i] === "a"){
        arr[i]="i";
    } 
}
let result = arr.join("");
console.log(result);

// find median

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];





const road = ages.sort(function(a, b) {
  return a - b;
});
console.log(road);


const uniqueRoad = new Set(road);

const backToArray = [...uniqueRoad];


console.log(backToArray);
const median = backToArray[Math.round(backToArray.length/2)];
console.log(median);


