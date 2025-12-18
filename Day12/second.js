let animal = {
  speak() {
    console.log("Animal speaking");
  },
};

let dog = {
  breed: "Labrador",
};

dog.__proto__ = animal;

dog.speak(); // ✅ Works, but not recommended

// ⚠️ First, why avoid __proto__?
// The __proto__ property:

// Is non-standard historically (though now part of modern specs for compatibility).
// Is considered deprecated / discouraged for most use cases.
// Can lead to unexpected behavior or performance issues.
// Isn’t guaranteed to work in all JavaScript environments (especially older ones or embedded systems).

// ✅ Object.create() is the modern and preferred way
// Syntax: Object.create(proto, [propertiesObject])

let animal2 = {
  speak() {
    console.log("Animal speaking");
  },
};

let dog2 = Object.create(animal2);
dog2.breed = "Labrador";

dog2.speak(); // ✅ Works — clean and preferred

// Advantages of Object.create():
// Feature	                          Benefit:--->
// ✅ Standards-compliant	        Part of ECMAScript 5+
// ✅ Safer	                        Doesn’t mutate an existing object’s prototype
// ✅ More powerful	                Can define property descriptors at creation
// ✅ Cleaner syntax	                Better for creating prototype chains intentionally
