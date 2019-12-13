/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
 testMe(); // what order should these log out? Howdy or Partnah first?
 output
 Partnah
 Howdy

/* CHALLENGE 2 */

function delayedGreet() {
  console.log('welcome')
}
setTimeout(delayedGreet,3000)
// Uncomment the following line to check your work!
  delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log('hello')
setTimeout(function (){
console.log('goodbye');
},3000);
}
// Uncomment the following line to check your work!
 helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord(){
  setTimeout(brokenRecord, 1000);
  console.log('hi again');
  }
// Uncomment the following line to check your work!
   brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  var i = 0;
  var run = setInterval(() => {
    i++;
    console.log('hi again');
    if(i > 4) clearInterval(run);
  }, 1000);
}
// Uncomment the following line to check your work!
 limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func,interval,duration) {
  interval = interval*1000;
  duration = duration*1000;
  var intervalDuration = setInterval(func, interval);
  setTimeout(() => {
    clearInterval(intervalDuration)
  }, duration);
}
// Uncomment the following lines to check your work!
 function theEnd() {
   console.log('This is the end!');
 }
 everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
