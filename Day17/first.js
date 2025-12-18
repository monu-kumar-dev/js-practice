// ++++ Hoisting ++++++++++
// iska matlb hota hai jo define hai variable wo top pe chla jata hai, jaise jase define hai,aur wo data type bhi le leta hai variable ka.
// Example:------->
// var x = undefined
// let y; (y in temporal dead zone until value is assign)



// console.log(y); // error(Cannot access 'y' before initialization)
// console.log(x); // undefined
// console.log(z); // error (z is not defined)
// var x = 10; // after hoisting remain only x = 10
// let y = 20; // after hoisting remain only y = 20
