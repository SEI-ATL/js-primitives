// 1.

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

  console.log(friends[friends.length - 1]);

 // 2. 
  
  const sortedFriends = friends.sort();

  console.log(sortedFriends);

  // 3.

  var friendsTwo = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

  let friendsTwoArray = friendsTwo.split(',');

  console.log(friendsTwoArray);

  // 4.

  let friendsTwoSort = friendsTwoArray.sort();

  let friendsTwoReverse = friendsTwoSort.reverse();

  console.log(friendsTwoReverse);

  // 5.

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

  let ourFriends = myFriends.concat(yourFriends);

  let ourFriendsSort = ourFriends.sort();

  console.log(ourFriendsSort);

  // 6.

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

  let phoRank = foods.indexOf('Pho') + 1;

  console.log(phoRank);

  // 7.

  const donutIndex = foods.indexOf('Donuts');
  foods.splice(donutIndex, 1);

  console.log(foods);

  // 8.

  console.log(foods[5-1]);
  console.log(foods[10-1]);

  // 9.

  let word = "Space";

  let newWord = word.replace('a', 'i');

  console.log(newWord);

  // 10.

  const ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

  const agesSort = ages.sort(function(a, b){return a - b});

  function median(array){
      const arrayMid = array.length / 2;
      if (arrayMid % 2 === 0) {
        return (array[arrayMid] + array[arrayMid +1]) / 2;
      }
      else {
        return array[arrayMid+0.5]
      }
  }
  
  console.log(median(agesSort));
