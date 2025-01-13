// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}
function add(n){
    return n**2;

}
  // function that takes other function as a callback
function cube(add, n) {
    return add(n) * n
}
console.log(cube(add, 3))