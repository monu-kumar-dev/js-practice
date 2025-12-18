// Creating Dummy data

const restaurant = [];
const images = [
  "First",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "Eight",
  "nine",
  "tenth",
];

const rest_name = [
  "Spice Hub",
  "Food Junction",
  "Royal Tandoor",
  "Urban Bites",
  "Curry Palace",
  "Flavors of India",
  "Hungry Point",
  "Taste Town",
  "Masala Magic",
  "The Food Court",
  "Street Treats",
  "Desi Delight",
  "Biryani House",
  "Chaat Corner",
  "Grill Nation",
  "Hot & Spicy",
  "Food Fiesta",
  "Indian Zaika",
  "Cafe Cravings",
  "Golden Spoon",
];

const foodTypes = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Fast Food",
  "Street Food",
  "Continental",
  "South Indian",
  "Desserts",
];

const delhiLocations = [
  "Connaught Place",
  "Karol Bagh",
  "Lajpat Nagar",
  "Saket",
  "Dwarka",
  "Rohini",
  "Pitampura",
  "Janakpuri",
  "South Extension",
  "Rajouri Garden",
];

for (let i = 0; i < 99; i++) {
  const obj = {};
  obj["image"] = images[Math.floor(Math.random() * 10)];
  obj["name"] = rest_name[Math.floor(Math.random() * 20)];
  obj["rating"] = Math.floor((Math.random() * 5) + 1);
  obj["foodTypes"] = foodTypes[Math.floor(Math.random() * 10)];
  // obj["Price_for_two"] = Math.floor((Math.random() * (2500 - 100 + 1)) + 100); // max = 2500, min = 100
  // In Short of line 59:--->
  obj["Price_for_two"] = Math.floor(Math.random() * 2401) + 100; // 100 ≤ Price_for_two ≤ 2500
  obj["delhiLocations"] = delhiLocations[Math.floor(Math.random() * 10)];
  obj["Distance_from_Customer_house"] = (Math.random() * 10 + 1).toFixed(1);
  obj["offers"] = Math.floor(Math.random() * 30) + 1 + "%";
  obj["Alchol_servers"] = Math.random() > 0.7;
  // const hour = Math.floor(Math.random() * (23 - 8 + 1)) + 8;
  // obj["Restaurant_open_time"] = hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
  const openHour = Math.floor(Math.random() * 24);
  const closeHour = (openHour + 12) % 24;

  function formatTime(hour) {
    if (hour === 0) return "12 AM";
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return "12 PM";
    return `${hour - 12} PM`;
  }

  obj["Restaurant_open_time"] = formatTime(openHour);
  obj["Restaurant_close_time"] = formatTime(closeHour);

  restaurant.push(obj);
}

// console.log(restaurant);

// Output:--->
// {
//     image: 'Eight',
//     name: 'Curry Palace',
//     rating: 5,
//     foodTypes: 'Street Food',
//     Price_for_two: 851,
//     delhiLocations: 'Karol Bagh',
//     Distance_from_Customer_house: '6.3',
//     offers: '2%',
//     Alchol_servers: false,
//     Restaurant_open_time: '2 AM',
//     Restaurant_close_time: '2 PM'
//   }

// Homework:--> Convert array to json

// ++++++++ This is how we change array to json ++++++++++++++++
// ✅ Step 1: Convert restaurant array to JSON
// Use JSON.stringify() ⬇️
// const restaurantJSON = JSON.stringify(restaurant);

// ✅ Step 2: Print JSON in readable format (Recommended)
// const restaurantJSON = JSON.stringify(restaurant, null, 2);
// console.log(restaurantJSON);
// ✔ null → no replacer
// ✔ 2 → indentation (pretty format)

// ************** Changing array to json ****************************************
// Convert array to JSON
const restaurantJSON = JSON.stringify(restaurant, null, 2);

// Print JSON
console.log(restaurantJSON);

// Outputs:--->
//  {
//     "image": "tenth",
//     "name": "Spice Hub",
//     "rating": 4,
//     "foodTypes": "Continental",
//     "Price_for_two": 2310,
//     "delhiLocations": "South Extension",
//     "Distance_from_Customer_house": "7.8",
//     "offers": "4%",
//     "Alchol_servers": false,
//     "Restaurant_open_time": "4 AM",
//     "Restaurant_close_time": "4 PM"
//   }
