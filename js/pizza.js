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

const lastFriend = (arr) => {
    return arr[arr.length - 1];
}

console.log(lastFriend(friends));

//   2.) Sort the list of `friends` above in alphabetical order.

let alphabeticalArray = friends.sort();

console.log(alphabeticalArray);

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friendsStr = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
let friendArray = friendsStr.split(',');
let sortedFriendArray = friendArray.sort();

console.log(sortedFriendArray);

// 4.) List all the `friends` above in reverse alphabetical order.

let reversedFriends = friendArray.reverse();

console.log(reversedFriends);

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

  let sortedConcatArray = myFriends.concat(yourFriends).sort();

  console.log(sortedConcatArray);

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

  const myFavoriteFood = foods.findIndex(foods => foods === "Pho");
  const myFavoriteFoodRank = myFavoriteFood + 1;

  console.log(myFavoriteFoodRank);

  // 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

  const noDough = foods.splice(foods.findIndex(foods => foods === "Donuts"), 1);
  console.log(noDough);
  // To see the array after removing donuts, uncomment the console below. 
  //console.log(foods);

  // 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

  const twoFavorites = (arr) => {
      return `My fifth favorite food is ${arr[4]} and 10th favorite is ${arr[9]}`
  }

  console.log(twoFavorites(foods));

  // 9.) Change the word "Space" to the word "Spice".

  let word = "Space"
  word = "Spice";

  console.log(word);

  // 10.) **BONUS** - Here are a list of `ages`

  const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
  const sortedAges = ages.sort();
  const findMedian = (arr) => {
      let median = Math.floor(arr.length / 2);
      return arr[median];
  } 

console.log(`The array length is ${sortedAges.length}. The halfway point is ${Math.floor(sortedAges.length/2)} and the age at that position is ${findMedian(sortedAges)}`)