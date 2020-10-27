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
  //1.) last name in array
  const lastFriend = (arr) => {
    return arr[arr.length - 1];
}

console.log(lastFriend(friends));

  //2Albhabeticaly listed

let alphabeticalArray = friends.sort();

console.log(alphabeticalArray);

//3.) Strings Alphabetically.

var friendsStr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
let friendArray = friendsStr.split(',');
let sortedFriendArray = friendArray.sort();

console.log(sortedFriendArray);

//4.)Reverse Alphabetical
console.log(newArray.reverse());

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
  
  const ourFriends = myFriends.concat(yourFriends);
  console.log(ourFriends);
  
  //6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food? Try finding the rank of `Pho`.
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
  
  var pho = foods.indexOf("Pho");
  console.log(pho);
  
  //7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**  

foods.splice(foods.indexOf('Donuts'));
console.log(foods);
//8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

console.log("The 5th favorite food is " + foods[4] + " and the 8th favorite food is " + foods[7] + ".");

//9.) Change the word "Space" to the word "Spice".

let word = "Space";
if (word !== "Spice"){
    word = "Spice"

}
console.log(word);


//let word = "Space";
