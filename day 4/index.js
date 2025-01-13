//conditional if


/*
Get user input using prompt(“Enter your age:”). 
If user is 18 or older , 
    give feedback:'You are old enough to drive' but 
if not 18 give another feedback stating to wait for 
    the number of years he needs to turn 18.


let age = prompt("Enter your age: ");

if (age>=18){
    console.log("You are old enough to drive");
}else{
    let ageDif = 18 - age;
    console.log("You are left with "+ ageDif+ " years to drive");
}
*/

/*
Compare the values of myAge and yourAge using 
if … else. 
Based on the comparison and log the result to console 
stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.
 */
let yourAge = 30;
let myAge = prompt("Enter your age: ");
let ageDiff = yourAge-myAge;
if (yourAge>myAge) {
    console.log("You are " + ageDiff  +" years older than me");
} else {
  console.log("Am older");  
}