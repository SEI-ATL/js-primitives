const friends = 
['Moe',
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
'Harriet'];

function lastElement(person){
let lastItem = person[friends.length-1];
return lastItem;
}
console.log(lastElement(friends));

function myfunction(person){
    let order = (person).sort();
    return order
}
console.log(myfunction(friends));

var Friend2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
  let sortedNames = Friend2.split(',').sort().join(',');
  console.log('Sorted Names: ' + sortedNames);

  let reverseNames = Friend2.split(',').reverse().join(',');
  console.log('Names Reverse: ' + reverseNames);

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

  let friends23 = myFriends.concat(yourFriends).sort();
console.log('myFriends and yourFriends Sorted: ' + Friends23);

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

  let placement = foods.indexOf('Pho');
console.log('Pho is in the ' + placement + 'th slot.');


let foodRemoved = foods.splice(foods.indexOf('Donuts'), 1);
console.log('The item that was removed was ' + foodRemoved + '.');


const favs = foods.slice(5, 10);
  console.log(favs);

  let word = "Space";
  let newWord = word.replace("Space", "Spice");
  console.log(newWord);
