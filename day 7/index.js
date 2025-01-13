/*
function sumArray(nums){
    let sum=0;
    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    return sum;

}


let num = [1, 2, 3, 4, 5, 5];

let x = sumArray(num);

console.log(x);


function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  */
 function sum(){
    for(let i = 0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
 }
 sum(2,3,5,7,4);
 sum("rt","yy","dg");