//Make a 'favoriteThings' object that contains the following 
//keys: band, food, person, book, movie, holiday. Have the values 
//to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: 'ben folds',
  food: 'pizza',
  book: 'Harry Potter',
  movie: 'Star Trek',
  holiday: 'Christmas'
};

//After you've made your object, add another key named 'car' with 
//the value being your favorite car and then another key named 'brand' 
//with the value being your favorite brand.

favoriteThings.car = 'M3';
favoriteThings.brand = 'BMW';

//Now change the food key in your favoriteThings object to be 'Lettuce' 
//and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user 
//object checking to make sure that each value is truthy. 
//If it's not truthy, remove it from the object. 
//hint: 'delete'.

for (var key in user) {
  if (!user[key]) {
    delete user[key];
  }
}

//Once you get your truthy object, Change the remaining 
//values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than 
//my information.

user.name = 'Philipp';
user.username = 'Schulte';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on 
  //objects) to your methodCollection object. 
//One called 'alertHello' which alerts 'hello' and 
//another method called logHello which logs 'hello' to the 
//console. 

methodCollection.alertHello = function(str) {
  alert(str);
};

methodCollection.logHello = function(str) {
  console.log(str);
};



//Now call your alertHello and logHello methods. 

methodCollection.alertHello('hello');
methodCollection.logHello('hello');



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//  a, e, i, o, u //

//write a function called voweler that accepts a string, 
//and returns an object with the keys being all the vowels 
//in that string, and the values being how many times that 
//particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(str) {
  debugger;
  var vowelCount = {};
  var a = 0, e = 0, i = 0, o = 0, u = 0;
  for (var j = 0; j < str.length; j++) {
    switch(str[j]) {
        case 'a':
          vowelCount.a = ++a;
          break;
        case 'e':
          vowelCount.e = ++e;
          break;  
        case 'i':
          vowelCount.i = ++i;
          break;
        case 'o':
          vowelCount.o = ++o;
          break;
        case 'u':
          vowelCount.u = ++u;
          break;
    }
  }     
  return vowelCount;     
};

