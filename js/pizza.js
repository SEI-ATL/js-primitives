// Answer 1
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

  let lastFriend = friends.pop()
  console.log(lastFriend)

  // Answer 2
  let sortedFriends = friends.sort()
  console.log(sortedFriends)

  // Answer 3
  var thisFriends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
  let sortedstrFriends = thisFriends.split(",").sort()
  console.log(sortedstrFriends)

  // Answer 4
  let friendsArray = thisFriends.split(",")
  let friendsArraySorted = friendsArray.sort()
  let friendsReversed = friendsArray.reverse()
  console.log(friendsReversed)

  // Answer 5
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

  let concatFriends = myFriends.concat(yourFriends)
  console.log(concatFriends)

  // Answer 6
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

  console.log('Pho is number ' + foods.indexOf('Pho') + '.')

  // Answer 7
  console.log(foods)
  console.log(foods.indexOf('Donuts'))
  foods.splice(13, 1)
  console.log(foods)

  // Answer 8
console.log(foods[5])
console.log(foods[10])

  // Answer 9
  let word = "Space";
  let wordArray = word.split("")
  wordArray[2] = "i"
  wordArray[3] = "c"
  wordArray[4] = "e"
  let spice = wordArray.join("")
  console.log(spice)