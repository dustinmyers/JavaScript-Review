var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns 
//another function. 
//Do what you need to do in order to call your function and 
//get 'Calling Jake at 435-215-9248' in your console.

var test = callFriend();
test('435-215-9248');



/*

Write a function(one) that accepts a function(two) as it's first 
//argument and returns a new function(returned) (which calls the 
//original function(two) that was passed in) that can only ever 
//be executed once(two).

Once completed, add a second arguments that allows the 
//function to be executed N number of times. After the 
//function has been called N number of times, 
//console.log('STAHHP');

*/
var one = function(two, n) {
  var counter = 0;
  return function() {
    if (counter < n) {
        counter++;
        return two();
      }
    else {
      console.log('STAHHP')
    }    
  }
}

var two = function() {
  console.log("Its working")
}

var test = one(two);