// String

let str = "Hello Monu";
console.log(typeof str);
let str1 = "Monu Bhai";
let str3 = `Aur Batao Bhaiya Kya Haal Chaal`;
console.log(str, str1, str3);

let price = 50;
console.log(`Price of the tamato is ${price}`);

// String Concatentaion
let s1 = "Hello";
let s2 = " coder Army";
console.log(s1 + s2);
let s3 = "Monu bhaiya kya kr rhr ho";
console.log(s3.length);

// "Hello coder Army" print it
// console.log(""hello Coder Army""); // error
console.log("'hello Coder Army'"); // 'hello Coder Army'
console.log('"hello Coder Army"'); // "hello Coder Army"
console.log(`"hello Coder Army"`); // "hello Coder Army"

let message = "Monu bhaiyaa aacha aadmi har, \n pr kabhi kabhi badal jata hai.";
console.log(message);

// Print it Monu bhaiyaa aacha aadmi har, \n pr kabhi kabhi badal jata hai.
// Then we use Escape Character --> \

let message2 =
  "Monu bhaiyaa aacha aadmi har, \\n pr kabhi kabhi badal jata hai.";
console.log(message2);

let special = "rohit";
console.log(special[0]);
console.log(special.charAt(0));
console.log(special.toUpperCase());

// Note ye jo hm string ke upar .charAt, .toUppercase etc lga rhe hai isse main string ke value me koi fark nhi pdta hai.
console.log(special);

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder")); // -1(Becuse here we write coder in small)
console.log(hero.includes("coder")); // false(Because c is in small)
console.log(hero.includes("Coder")); // true

let newString = "HelloDon";
console.log(newString.slice(1, 3));
console.log(newString.slice(-6, 5));
// slice can take negative index also (if -ve then count start with end)

console.log(newString.substring(0, 3));
// console.log(newString.substr(0, 3)); // less use

// Explanation:
// substr() takes start and length as arguments.

// So this means: Start at index 0, take 3 characters.

// ✅ Output: 'Hel'

// 📝 substr() is considered deprecated, so prefer slice() or substring() in modern code.

let str10 = "Hello Ji Aap Sb Kaise Ho Ji";
console.log(str10.replace("Ji", "Jee"));
console.log(str10.replaceAll("Ji", "Jee"));
// console.log(str10);

let str11 = "Money! Honey! Sunny! Funny";
console.log(str11.split("!"));
console.log(str11.split("! "));

let str12 = "  hello ji  ";
console.log(str12.length);
console.log(str12.trim().length);
console.log(str12.trimStart().length);

// New way to create string
let latestString = new String("Hello Coder Army");
console.log(latestString); // [String: 'Hello Coder Army']
console.log(typeof latestString); // object
