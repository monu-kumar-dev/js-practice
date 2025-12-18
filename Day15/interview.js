// +++++++++ why Object is not Iterable ++++++++++++++++++

// ✅ 🔥 Ideal Interview Answer:------------>
// "In JavaScript, an object is not iterable by default because it does not have a built-in [Symbol.iterator] method.

// Iterable objects like arrays, strings, maps, and sets implement this special method, which allows them to be used in constructs like for...of loops and the spread operator (...).

// Plain objects ({}) don’t define how their key-value pairs should be iterated in a specific order, so JavaScript doesn’t treat them as iterable.

// However, we can still loop over object properties using methods like Object.keys(), Object.values(), Object.entries(), or a for...in loop."**

// ✅ You can add a simple example (if the interviewer wants one):

let obj = { a: 1, b: 2 };

// ❌ This will throw an error
for (let item of obj) {
  console.log(item);
}
// TypeError: obj is not iterable

// ✅ Correct way:
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
// 💡 Bonus (if they ask more):------>
// "We can make objects iterable manually by defining a [Symbol.iterator] method inside the object. But by default, plain objects are not meant to be used as iterables."

