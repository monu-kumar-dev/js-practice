// +++++++++++++++ Big Code ++++++++++++++++++++++++++++++++++++++++++++++++
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

// placeOrder(cart)
//   .then((order) => preparingOrder(order))
//   .then((foodDetails) => pickupOrder(foodDetails))
//   .then((dropLocation) => deliverOrder(dropLocation))
//   .then((msg) => console.log(msg))
//   .catch((error) => console.log(error));

// +++++++++ Same With Async Await +++++++++++++++++++++++++++++++++++++
// async function greet() {
//   const order = await placeOrder(cart);
//   const foodDetails = await preparingOrder(order);
//   const dropLocation = await pickupOrder(foodDetails);
//   deliverOrder(dropLocation);
// }

// greet();

// Note:--> without adding await function does not wait he move to next line of code, but when we add await firstly complete this then go to next Line of code.
// when we add await always remember that ye hmesha async function ke inside hi hota hai.

// async await me error ko handle krne ke liye hm try, cache ka use krte hai:-->

async function greet() {
  try {
    const order = await placeOrder(cart);
    const foodDetails = await preparingOrder(order);
    const dropLocation = await pickupOrder(foodDetails);
    deliverOrder(dropLocation);
  } catch (error) {
    console.log("error");
  }
}

greet();
