//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

 var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, 
// //height, gender

var person = function(name, age) {
  var myObj = {name: name, age: age};
  return myObj;
};


//Create a animal array and a person array.

 var animal = [];
 var personArry = [];


//Create two instances of Animal and push those into your animal array

var dog = new Animal('dog', 'lucky', 4, 'black', ["meat", "dog food", "fish", "bones"]);
var cat = new Animal('cat', 'whiskers', 4, 'gray', ["meat", "fish", "whiskers"]);

animal.push(dog, cat);
//Create two instances of person and push those into your person array.

personArry.push(person("Dustin", 28));
personArry.push(person("Philipp", 32));



//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert 
//"(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function(item) {
  alert(this.name + ' ate '+ this.food[item]);
};

cat.eat(2);



//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function? Creating a new instance of the 'this' object
  2) What's a good way to describe the keyword 'this' --> 'this' is an object that can delegate to its' prototype properties
  3) Can a normal function which creates an object and then returns that object use the prototype? Nope
  4) What happens if you forget to use 'new' when calling a constructor? does not work!
*/