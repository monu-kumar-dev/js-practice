// call back hell

// asynchronous task
// weather:-->

const PromisesObj = fetch(
  `http://api.weatherapi.com/v1/current.json?key=96fa8ac9fece49ff9f642346251809&q=London&aqi=yes`
);
// console.log(PromisesObj); // Promise { <pending> }
// Note:--> yaha aisa isliye ho rha hai kyuki fetch ko time lg rha hai data ko lane me

// If we want the whole output then:--->(yaha output aa ja rha hai kyuki hm 2 second tk wait kr rhe hai.)
// but yaha ek error hai jaruri to nhi hai ki hm answer ko 2s waad hi aayegaa wo 10s bhi le skta hai ya 5ms bhi
// setTimeout(() => {
//   console.log(PromisesObj); // working
// }, 2000);

// fixing error:--->
// PromisesObj.then((data) => {
//   console.log(data);
// });

// ab jaruri to nhi hai baar baar data aa jaye kuch kaaran bs error aa gya to usse bhi solve krna pdata hai to uske liye hm use krte hai ".catch" ka

// PromisesObj.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// In this output comes header part:-------->
// PromisesObj.then((data) => {
//   console.log(data);
// });

// In this output comes in body part:-------->
// PromisesObj.then((response) => {
//   console.log(response.json()); // Promise { <pending> }
// });

// // Handle upper code for display response body type - 1:--------->
// PromisesObj.then((response) => {
//   // console.log(response.json()); // Promise { <pending> }

//   const pro2 = response.json();
//   pro2.then((data) => {
//     console.log(data);
//   });
// });

// Handle upper code for display response body type - 2:--------->
// const pro2 = PromisesObj.then((response) => {
//   return response.json();
// });

// pro2.then((data) => {
//   console.log(data);
// });

// Or we can write the upper code like:------>(because jo return kara hai pro2 me usi pr then use kr rhe hai to directly hi kyu naa kr de)
// PromiseChaining:------->

// PromisesObj.then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });

// We can write more short of upper code:--->
// PromisesObj.then((response) => response.json()).then((data) =>
//   console.log(data)
// );

// OR we can write it:------------->
fetch(
  `http://api.weatherapi.com/v1/current.json?key=96fa8ac9fece49ff9f642346251809&q=London&aqi=yes`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// If we want access inside this body response then:--->
// You underastand promises is like an object. so jis tarika se object ko access kete the usi tarika se isko bhi access kr lenge. Ex:--->
fetch(
  `http://api.weatherapi.com/v1/current.json?key=96fa8ac9fece49ff9f642346251809&q=London&aqi=yes`
)
  .then((response) => response.json())
  .then((data) => console.log(data.current.temp_f))
  .catch((error) => console.log(error));
