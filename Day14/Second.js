// 🔧 1. writable – Kya value change ho sakti hai?
// Meaning:--->
// Agar writable: false hai, to us property ki value change nahi ki ja sakti.

// 🔸 Example:

let obj = {};
Object.defineProperty(obj, "name", {
  value: "Monu",
  writable: false,
});

obj.name = "Raghav"; // Ye kaam nahi karega
console.log(obj.name); // Output: Monu
// ➡️ Samjho:---->
// "Monu" fix ho gaya hai, ab usme kuch bhi assign karne ki koshish karoge to ignore ho jayega (ya error ayega agar strict mode me ho).

// 👁️ 2. enumerable – Kya property loop/console me dikhai degi?
// Meaning:---->
// Agar enumerable: false hai, to property for...in, Object.keys(), aur console.log() me nahi dikhegi.

// 🔸 Example:--->

let obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "Monu",
  enumerable: false,
});

console.log(obj2); // Output: {}
console.log(obj2.name); // Output: Monu (Direct access se dikhega)
console.log(Object.keys(obj2)); // Output: []
// ➡️ Samjho:---->
// Property hai, par chhupi hui hai — loop ya object print karne par nahi dikhegi.

// 🧨 3. configurable – Kya property ko delete ya redefine kar sakte ho?
// Meaning:-->
// Agar configurable: false hai, to aap:------>
// 1.Us property ko delete nahi kar sakte
// 2.Uski writable, enumerable, etc. settings dubara change nahi kar sakte

// 🔸 Example:

let obj3 = {};
Object.defineProperty(obj3, "name", {
  value: "Monu",
  configurable: false,
});

delete obj3.name; // ❌ Nahi hoga delete
console.log(obj3.name); // Output: Monu

// Ab yeh bhi error dega:
// Object.defineProperty(obj, "name", { writable: true });

// ➡️ Samjho:--->
// Property lock ho gayi — ab na delete kar sakte ho, na uski settings badal sakte ho.

// ✅ Recap (Short & Sweet):
// Property	               Kaam Kya Karti Hai?	                                  Agar false ho to kya hoga?
// writable	               Kya value change ho sakti hai?	                      ❌ Value change nahi hogi
// enumerable	           Kya property loop/console me dikhegi?	              ❌ Loop aur console.log me nahi dikhegi
// configurable	           Kya property delete ya redefine ho sakti hai?	      ❌ Delete nahi hogi, aur settings change nahi kar sakte
