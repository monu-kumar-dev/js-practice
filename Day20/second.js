const id = document.querySelector("#first");
id.innerHTML = "Hello Monu!";

const class1 = document.querySelector(".header2");
// console.log(class1); // check output in windows console
class1.style.backgroundColor = "red";

//  Note:--> Agr hm querySelector ka use krte hai class pe to kya hogaa agr ek hi naam se boht sare class ho:------>
// agr querySelector ho to first wala pe apply hogaa jiska className same hogaa
// agr querySelector all ho to sabhi className wla pe apply hogaa.

const classes = document.querySelectorAll(".header1");
// console.log(classes); // NodeList []
classes[1]; // <h2 id="second" class="header1">Topic Covered So far</h2>
classes.length; // 2

// // +++++++++++ How we Iterate over Nodelist +++++++++++++++++++++++

// for loop:--->
for (let i = 0; i < classes.length; i++) {
  // console.log(classes[i]);
}

// for...of loop:------->
for (let val of classes) {
  //   console.log(val);
}

// foreach loop:--------.
classes.forEach((value) => console.log(value));

// Outputs:--->
// <h1 id="first" class="header1">Hello Coder Army</h1>
// <h2 id="second" class="header1">Topic Covered So far</h2>

// +++ If we want to change color then use:-----. ++++++++++++
for (let i = 0; i < classes.length; i++) {
  classes[i].style.backgroundColor = "blue";
}

// +++++ If we want Nodelist into array then ++++++++++++
Array.from(classes);

// note:---> we can apply querySelectorAll on tag also.

let obj = document.querySelector("li");
console.log(obj); //  <li>CN</li> (this gives only first list)

let obj2 = document.querySelectorAll("li");
console.log(obj2); // NodeList(4) [li, li, li, li]

// *************************************************************************

const obj4 = document.getElementsByTagName("li");
console.log(obj4); // HTMLCollection(4) [li, li, li, li]
console.log(obj4.length); // 4

// ++++++++++++++++ How to iterate over it +++++++++++++++++++
// if it has length property then we use for loop
// for loop:--->
for (let i = 0; i < obj4.length; i++) {
  //   obj4[i].style.color = "black";
}

// for...of loop:----> (Iteratable hai so use kr skte hai)
for (let value of obj4) {
  //   value.style.color = "black";
}

// +++++++++ If we want to use forEach loop then convert into array ++++++++++
const arr = Array.from(obj4);
arr.forEach((value) => (value.style.color = "aqua"));

// **********************************************************************************

const list = document.querySelector("li");
// console.log(list); // <li>...</li>
// console.log(list.parentElement); // ul#third.header2
// console.log(list.parentNode); // ul#third.header2

// ******************************
const par = document.querySelector("ul");
// console.log(par); // working
console.log(par.childNodes); // NodeList(9) [text, li, text, li, text, li, text, li, text]
// Note:---> Uppar wale line ke code me 9 islye bt rha hai kyuki wo khali space ko bhi count kr rha hai, agr hm ek list ko dusre ke bagl me likh de bina space ke to output me 8 ho jata hai.
console.log(par.children); // HTMLCollection(4) [li, li, li, li]

// ++++++++++++++++ Assume This is the question which are following +++++++++++++
// Q.
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>;

// ++++++++++Guess Output +++++++++++
console.log(par.firstChild); // #text   (because the first thing inside <ul> is whitespace)
console.log(par.firstElementChild); // <li>One</li> (first actual HTML element)
console.log(par.lastChild); // #text   (last thing is a whitespace node after last <li>)
console.log(par.lastElementChild); // <li>Four</li> (last actual element)
console.log(par.nextSibling); // Probably #text or another element after the <ul>
console.log(par.previousSibling); // Probably #text or an element before the <ul>

// ✅ Key takeaway:---->
// 1.Use children and firstElementChild / lastElementChild when you only care about HTML elements.
// 2.Use childNodes and firstChild / lastChild when you also want text nodes or comment nodes included.

// ++++++++++++++ Nodelist vs HtmlCollection +++++++++++++++++++
// HTMLCollection vs NodeList – Quick Notes:---------->
// 1️⃣ HTMLCollection :----->

// Returned by:--->
// document.getElementsByTagName()
// document.getElementsByClassName()
// element.children :---->

// Live? ✅ Yes — Updates automatically if the DOM changes.

// Access:--->
// By index: collection[0]
// By name/id: collection["idName"]

// Methods:--->
// Limited (no .forEach() in older browsers).
// Need Array.from() or spread syntax ([...collection]) to use array methods.

// Iterable?: Yes in modern browsers, but limited in older ones.

// 2️⃣ NodeList
// Returned by:---->
// document.querySelectorAll() → Static snapshot.
// Node.childNodes → Live NodeList.

// Live?
// ❌ No for querySelectorAll() (static).
// ✅ Yes for childNodes.

// Access:---->
// Only by index (nodelist[0]).

// Methods:---->
// Has .forEach() in modern browsers.

// Iterable? ✅ Yes — works with for...of.

// 3️⃣ Key Differences Table :------------>
// Feature	                 HTMLCollection	                      NodeList
// Returned by	             getElementsBy*	                      querySelectorAll, childNodes
// Live updates?	         ✅ Yes	                             ❌ No (except childNodes)
// .forEach() support	     ❌ (older)	                         ✅ (modern)
// Access by name/id	     ✅ Yes	                              ❌ No
// Iterable (for...of)	      Partial	                            ✅ Yes

// +++++++++++++++++ Difference between innerHtml, innerText, TextContent ++++++++++++++++++++++
// 1️⃣ innerHTML:---------->
// What it does: Returns or sets the HTML markup inside an element.
// Includes tags: ✅ Yes
// Performance: Slower if reading, because it parses HTML.
// Updates: Setting it replaces the element’s contents with parsed HTML.

// Example:-->
<p id="p1">
  Hello <b>World</b>
</p>;
const el = document.getElementById("p1");
console.log(el.innerHTML); // "Hello <b>World</b>"

el.innerHTML = "Hi <i>There</i>"; // Now: <p>Hi <i>There</i></p>

// 2️⃣ innerText :----->
// What it does: Returns or sets the visible text as seen on the page.
// Ignores hidden text (via CSS like display: none).
// Respects CSS styling: ✅ Yes (line breaks, hidden elements).
// Performance: Slower because it forces layout calculation.

// Example:--->

<p id="p2">
  Hello <b style="display:none">Hidden</b> World
</p>;

const el = document.getElementById("p2");
console.log(el.innerText); // "Hello World"

// 3️⃣ textContent :----->
// What it does: Returns or sets all text in the node, regardless of CSS.
// Includes hidden text: ✅ Yes
// Ignores HTML tags: ✅ Yes (returns plain text).
// Performance: Faster than innerText because no layout calculation.

// Example:--->

<p id="p3">
  Hello <b style="display:none">Hidden</b> World
</p>;

const el = document.getElementById("p3");
console.log(el.textContent); // "Hello Hidden World"

// 4️⃣ Summary Table---->
// Feature	                   innerHTML	             innerText	                textContent
// Returns HTML?	              ✅ Yes	                ❌ No	                    ❌ No
// Includes hidden text?	      ✅ Yes	                ❌ No	                    ✅ Yes
// Respects CSS?	              ❌ No	                ✅ Yes	                     ❌ No
// Performance	            Medium (parses HTML)	    Slow (calculates layout)	     Fast
