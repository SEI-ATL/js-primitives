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

  function findLastName (array) {
      let length = array.length;
      let index = length - 1;
      return array[index];
  }
  findLastName(friends);

  // 2.) Sort the list of `friends` above in alphabetical order.

  function sortAlphabetical (array) {
      return array.sort();
  }
  sortAlphabetical(friends);

  // 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

  var stringFriends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
  function sortString (str) {
      let arrayFriends = str.split(',');
      return arrayFriends;
  }
  sortString(stringFriends);

  // 4.) List all the `friends` above in reverse alphabetical order.

function reverseAlphabetical (array) {
    let input = array.sort();
    return input.reverse();
}

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

function combineAndSort (array1, array2) {
    let combined = array1.concat(array2);
    return combined.sort();
}

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
  function findFoodRank (array) {
      for (let i < 0; i < array.length; i++) {
          if (foods[i] === 'Pho') {
              let rank = i + 1;
              return rank;
          }
      }
  }
findFoodRank(foods);

  // 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**
function removeFood (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Donuts') {
            let revised = array.splice(i, 1);
            return revised;
        }
    }
}
removeFood(foods);
// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

function rangeOfFoods (high, low) {
    let index1 = high - 1;
    let index2 = low - 1;
    let newRange = [];
    for (let i = index1; i = index2; i++) {
        newRange.push(foods[i]);
    }
    return newRange;
}
rangeOfFoods(5, 10);

// 9.) Change the word "Space" to the word "Spice".

let word = "Space";
let newWord = word.replace("a", "i"); 

// 10.) **BONUS** - Here are a list of `ages`

const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
// find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
  // *If there is an even number of numbers, average the two middle numbers.

let ascending = ages.sort(function(a, b){return a-b});
function findMedianIndex(array) {
    if (array.length % 2 !== 0) {
        // because indexes start at 0, (array.length-1)/2 is the median index for odd lengths
        let medianIndex = (array.length - 1) / 2;
        let median = array[medianIndex];
        return median;
    } else {
        // even lengths: the average of array[(array.length)/2 - 1] and array[(array.length)/2]
        let index1 = (array.length) / 2
        let index2 = index1 - 1;
        let median = (array[index1] + array[index2]) / 2;
        return median;
    }
}
findMedianIndex(ages);