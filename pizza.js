
1. 
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

function findLast (people) {

let lastEle= people[friends.length - 1];
 return lastEle; 

}
console.log(findLast(friends));

2. 

function singleFile (people) {

    let alphabetical = (people).sort();
    return alphabetical; 
}
console.log(singleFile(friends));

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.

var friend = 'Moe, Larry, Curly, Jane, Emma, Elizabeth, Elinor, Mary, Darcy, Grey, Lydia, Harriet';


function sliceAndSort(people) {

    let split = people.split(' '); 
    let sorted = split.sort();
    return sorted;
}
console.log(sliceAndSort(friend))

4. 

function sliceAndSort(people) {

    let split = people.split(' '); 
    let sorted = split.sort();
    let reverse = sorted.reverse(); 
    return reverse;
}
console.log(sliceAndSort(friend))

5. 

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

  let ourFriends = yourFriends.concat(myFriends);
  console.log(ourFriends.sort());

  6. 
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

  console.log(foods.indexOf('Pho'));

  7. 

  let removed = foods.splice(foods.indexOf('Donuts'), 1);
  console.log(removed);

  8. 

  const someFavs = foods.slice(5,11);
  console.log(someFavs);
  
  9. 
  let word = "Space";
  let newWord = word.replace("Space", "Spice");
   console.log(newWord);


   10. 

   const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

   const sum = ages.reduce((sum, val) => (sum += val));
   const total = ages.length;
   console.log(sum / total);


































  
