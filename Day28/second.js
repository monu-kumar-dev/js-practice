// call back hell

// Domino se pizza order kr rhe hai
function placeOrder(callback) {
  console.log("Talking with Domino's");

  setTimeout(() => {
    console.log("Order Placed Sucessfully");
    callback();
  }, 2000);
}
// placeOrder(); // checking

function preparingOrder(callback) {
  console.log("Pizza Preparation started");

  setTimeout(() => {
    console.log("Pizza Preparation Done");
    callback();
  }, 5000);
}
// preparingOrder(); // checking

function pickupOrder(callback) {
  console.log("Reaching restaurant for picking order");

  setTimeout(() => {
    console.log("Picked up the order by delivery Boy");
    callback();
  }, 3000);
}
// pickupOrder(); // checking

function deliverOrder() {
  console.log("Delivery boy on the way");

  setTimeout(() => {
    console.log("Ordered delivered successfuly");
  }, 5000);
}
// deliverOrder(); // checking

// suppose we want two function call theN:---.
// placeOrder();
// preparingOrder();

// Outputs:---> (In my output we clearly see without order placed pizza preparation started which is wrong)
// Talking with Domino's
// Pizza Preparation started
// Order Placed Sucessfully
// Pizza Preparation Done

// To fix this we use callBack:----->
// placeOrder(preparingOrder);

// Outputs:--->
// Talking with Domino's
// Order Placed Sucessfully
// Pizza Preparation started
// Pizza Preparation Done

// To print all function :---->
// placeOrder(() => {
//   preparingOrder();
// });
// Note:---> How does it works:-> firstly placeorder function runs completely because callback is present after the both console.log(). so, firstly both console.log print their value then callback function runs, in my callback we can sending it as arrow function preparingOrder().
// Outputs:-------------->
// Talking with Domino's
// Order Placed Sucessfully
// Pizza Preparation started
// Pizza Preparation Done

// placeOrder(() => {
//   preparingOrder();
//   pickupOrder();
// });

// Ye output pahle ka hai jb 2nd function me callback nhi laga hua hai:-------------->
// How does it runs:--> sabse pahle mera placeorder function completly run hogaa kyuki call back uske baad laga hua hai. jb 2nd function preparingOrder run hogaa tb usme ka first console to run hogaa but second console me 5s ka time hai to wo 5s baad aayegaa lekin uske aane se pahle mera 3rd function ka 1st console aa jayegaa kyuki usme time nhi laga hua hai phhir uske baad 3rd function ka 2nd console aa jata hai kyuki usme time kewal 2s ka hai phhir uske baad 2nd function ka 2nd console aata hai.

// Outputs:--->
// Talking with Domino's
// Order Placed Sucessfully
// Pizza Preparation started
// Reaching restaurant for picking order
// Picked up the order by delivery Boy
// Pizza Preparation Done

// ++ Hm aisa nhi chahte to ese fix kaise kre ++++++++++++

// placeOrder(() => {
//   preparingOrder(() => {
//     pickupOrder();
//   });
// });

// outputs:------------->
// Talking with Domino's
// Order Placed Sucessfully
// Pizza Preparation started
// Pizza Preparation Done
// Reaching restaurant for picking order
// Picked up the order by delivery Boy


// This is call back hell:--->
placeOrder(() => {
  preparingOrder(() => {
    pickupOrder(() => {
      deliverOrder();
    });
  });
});

// Outputs:-->
// Talking with Domino's
// Order Placed Sucessfully
// Pizza Preparation started
// Pizza Preparation Done
// Reaching restaurant for picking order
// Picked up the order by delivery Boy
// Delivery boy on the way
// Ordered delivered successfuly
