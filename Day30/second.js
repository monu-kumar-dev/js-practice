// const cart = ["Pizza", "Coke", "Sandwich"];

// function placeOrder(cart, callback) {
//   console.log("Talking with Domino's");

//   setTimeout(() => {
//     console.log("Order Placed Sucessfully");
//     const order = {
//       orderId: 221,
//       food: cart,
//       restaurant: "Dominos",
//       location: "Dwarka",
//     };
//     callback(order);
//   }, 2000);
// }
// // placeOrder(); // checking

// function preparingOrder(order, callback) {
//   console.log("Pizza Preparation started");

//   setTimeout(() => {
//     console.log("Pizza Preparation Done");
//     const foodDetails = {
//       token: 12,
//       restaurant: order.restaurant,
//       location: order.location,
//     };
//     callback(foodDetails);
//   }, 5000);
// }
// // preparingOrder(); // checking

// function pickupOrder(foodDetails, callback) {
//   console.log("Reaching restaurant for picking order");

//   setTimeout(() => {
//     console.log("Picked up the order by delivery Boy");
//     const dropLocation = foodDetails.location;
//     callback(dropLocation);
//   }, 3000);
// }
// // pickupOrder(); // checking

// function deliverOrder(dropLocation) {
//   console.log("Delivery boy on the way");

//   setTimeout(() => {
//     console.log("Ordered delivered successfuly");
//   }, 5000);
// }

// placeOrder(cart, callback);
// preparingOrder(order, callback);
// pickupOrder(foodDetails, callback);
// deliverOrder(dropLocation);

// This is call back hell:--->
// placeOrder(cart, (order) => {
//   preparingOrder(order, (foodDetails) => {
//     pickupOrder(foodDetails, (dropLocation) => {
//       deliverOrder(dropLocation);
//     });
//   });
// });

// ++++++++++++++++++++++ We are avoiding call Back hell with the help of promises ++++++++++++++++++++++++++++++++++++++++++++++++++

const cart = ["Pizza", "Coke", "Sandwich"];

function placeOrder(cart) {
  console.log("Talking with Domino's");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;
      if (food_available) {
        console.log("Order Placed Sucessfully");
        const order = {
          orderId: 221,
          food: cart,
          restaurant: "Dominos",
          location: "Dwarka",
        };
        resolve(order);
      } else {
        reject("Items Out of stocks");
      }
    }, 2000);
  });

  return pr;
}

function preparingOrder(order) {
  console.log("Pizza Preparation started");

  const pr = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Pizza Preparation Done");
      const foodDetails = {
        token: 12,
        restaurant: order.restaurant,
        location: order.location,
      };
      resolve(foodDetails);
    }, 5000);
  });
  return pr;
}

function pickupOrder(foodDetails) {
  console.log("Reaching restaurant for picking order");

  const pr = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Picked up the order by delivery Boy");
      const dropLocation = foodDetails.location;
      resolve(dropLocation);
    }, 3000);
  });
  return pr;
}

function deliverOrder(dropLocation) {
  console.log("Delivery boy on the way");
  const pr = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Ordered delivered successfuly");
      resolve("All Work Done");
    }, 5000);
  });
  return pr;
}

placeOrder(cart)
  .then((order) => preparingOrder(order))
  .then((foodDetails) => pickupOrder(foodDetails))
  .then((dropLocation) => deliverOrder(dropLocation))
  .then((msg) => console.log(msg)) // ye isliye likhe hai kyuki last wala bhi apna message print kr rha hai resolve me uppar wala niche bhej de rha hai pr last wala ke liye bhi to kuch chahiye
  .catch((error) => console.log(error));

// why we write this:---->  .then((msg) => console.log(msg))
// First 3 .then() functions agle function ka result aage pass kar rahe hain.
// Last .then() me jo value aa rahi hai, wo deliverOrder ke resolve ki hui value hai, matlab "Done ✅".
