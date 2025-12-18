// ++++++++++ Event Bubbling And Event Capturing ++++++++++++++++++++++++++++

// event Bubbling and event Capturing :---------->
// How we Know this is event Bubbling or event Capturing:----> By default then understand it is event Bubbling, and in addEventListener has 3 parameter then it is event capturing.
// Syntax of event Bubbling:--> addEventListener(first_event, callback)
// Syntax of event Capturing:--> addEventListener(first_event, callback, capture)
// hm capture false ko nhi bhi likh skte hai, agr false hai phhir bhi bubbling hi chalegaa.

//+++++++ Event Bubbling +++++++++++++++++

// Event Bubbling (Going Up)
// After reaching the target, the event bubbles up to ancestors.
// Path: child → parent → grandparent → body → html → document

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Note:-->(3no ko uncomment krke revised kre)

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   false
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandParent clicked");
//   },
//   false
// );

// +++++++++ Event Capturing ++++++++++++++++++++
// Note:--> Ander se bahar ki wor means when we click on the child, outputs:-> grandParent->Parent->Child

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandParent clicked");
//   },
//   true
// );

// +++++++++ Checking Output If Both Are Present ++++++++++++++++++++

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   false
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandParent clicked");
//   },
//   true
// );

// +++ Output:--->+++
// ++++++++ Guess 1 ++++++++++++++
// if we clicking in the child then output:--->
// grandParent clicked
// child clicked
// parent clicked

// ++++++++ Guess 2 ++++++++++++++
// if we clicking in the parent then output:--->
// grandParent clicked
// parent clicked

// +++++++++ Guess Output:---> ++++++++++++++++++++

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandParent clicked");
//   },
//   false
// );

// +++ Output:--->+++
// ++++++++ Guess 1 ++++++++++++++
// if we clicking in the child then output:--->
// parent clicked
// child clicked
// grandParent clicked

// ++++++++ Guess 2 ++++++++++++++
// if we clicking in the parent then output:--->
// parent clicked
// grandParent clicked

// Note:---> Through the basics of output we understand that after clicking which is true comes first after than which is false.

// ++++ In this if we are clicking on child then output comes all then how we know hm kispe click kiye hai.++++++++++++++++++++++++++
// We use event and event.target
// If we use this and cliking on any variable output comes same

// child.addEventListener(
//   "click",
//   (event) => {
//     console.log(event.target);
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   (event) => {
//     console.log(event.target);
//   },
//   true
// );

// grandParent.addEventListener(
//   "click",
//   (event) => {
//     console.log(event.target);
//   },
//   false
// );

// Output will be when i clicked on child:--->
// <div id="child"></div>
// <div id="child"></div>
// <div id="child"></div>

// Output will be when i clicked on parent:--->
// <div id="parent">...</div>
// <div id="parent">...</div>

// Output will be when i clicked on grandParent:--->
// <div id="grandParent">...</div>

// ++++++++++++++++++ Guess Output +++++++++++++++++++++++++++++
// Note:---> Event.target ko true,false se fark nhi prta hai.

// child.addEventListener("click", (event) => {}, false);

// parent.addEventListener(
//   "click",
//   (event) => {
//     console.log(event.target);
//   },
//   false
// );

// grandParent.addEventListener("click", (event) => {}, false);

// Output will be when i clicked on child:--->
// <div id="child"></div>

// Output will be when i clicked on parent:--->
// <div id="parent">...</div>

// Output will be when i clicked on grandParent:--->
// nothing (because if we click on child then ye ancestor ke pass jata hai to ye gya parent ke pass aur waha console hai to print ho gya. but jb grandparent pr click krte hai tb naa to console hai aur naa hi ancestor so print nothing.)

// ++++++++++++++++++ Guess Output +++++++++++++++++++++++++++++

child.addEventListener("click", (event) => {}, false);

parent.addEventListener("click", (event) => {}, false);

grandParent.addEventListener(
  "click",
  (event) => {
    console.log(event.currentTarget);
  },
  false
);

// Output will be when i clicked on child:--->
// <div id="grandParent">...</div>

// Output will be when i clicked on parent:--->
// <div id="grandParent">...</div>

// Output will be when i clicked on grandParent:--->
// <div id="grandParent">...</div>

// +++++++++++++++++ event stop Propogation +++++++++++++++++++++++++++++++++++
child.addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
    // event.stopPropagation();
  },
  false
);

parent.addEventListener(
  "click",
  (event) => {
    console.log("parent clicked");
    event.stopPropagation();
  },
  false
);

grandParent.addEventListener(
  "click",
  (event) => {
    console.log("grandParent clicked");
  },
  false
);
