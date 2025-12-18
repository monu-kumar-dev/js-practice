// http://127.0.0.1:5500/JS/Day24/form.html?Name=Monu&LastName=Kumar&Age=21

// const form = document.querySelector("form");

// +++++++++++++++++++++++ click +++++++++++++++++++
// form.addEventListener("click", (event) => {
//   console.log(event); // PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
//   console.log(event.target); //(jb name pr click krte hai) <input type="text" id="first" name="Name" placeholder="Enter Your First Name">
//   console.log(event.target.id); // JAHA CLICK KRENEGE USKA ID AA JATA HAI
//   console.log(event.target.value); // isme value likhne ke baad jb click krte hai tb console me aata hai
// });

// +++++++++++++++++++++ input +++++++++++++++++++++++++++++++++++++
// form.addEventListener("input", (event) => {
//   console.log(event.target.value); // isme jaise jaise type krte hai waise hi console me aa jata hai.
// });

// +++++++++++++++++++++ change +++++++++++++++++++++++++++++++++++++

// form.addEventListener("change", (event) => {
//   console.log(event.target.value); // isme jb ek ko fill krne ke baad dusre pr click krenge first wala console me aa jayegaa.
// });

// +++++++++++++++++++++ Focus and FocusIn +++++++++++++++++++++
//--> IT DOES NOT BUBBLE.SO,IT NEED TO BE DIRECTLY ATTACHED TO INDIVIDUAL INPUT ELEMENTS.
//--> FOCUSIN:--> Bubble , so it can be attached to the form element for event delegation.
// +++++ code +++++
// form.addEventListener("focusin", (event) => {
//   console.log(event.target.value); // isme jb focus krenege mtlb jb hm load krke click krenge to kuch nhi rhta hai to khali print hogaa, phhir usme kuch text likhenge. Phhir agle pe jayenge to jo usme hogaa wo print hogaa kyuki load hua hai to usme bhi print kuch nhi hogaa.Ab jb hm text bhar chuke hai tb uspe click krenge to wo print hogaa.
// });

// ➡ What happens here:------>
// Suppose you type something in input-1.
// Then you click into input-2.
// At that moment, input-2 gets focus → event fires → event.target points to input-2.
// But since you just left input-1, it already had some value.
// 1.If input-2 is still empty, it will log "".
// 2.If input-2 has text, it logs that text.
// So the console always shows the value of the newly focused input field.

// +++++++++++++++++++++ Blur and FocusOut +++++++++++++++++++++
// IT DOES NOT BUBBLE.SO,IT NEED TO BE DIRECTLY ATTACHED TO INDIVIDUAL INPUT ELEMENTS.
// FOCUSOUT:--> Bubble , so it can be attached to the form element for event delegation.
// form.addEventListener("focusout", (event) => {
//   console.log(
//     "You left:",
//     event.target.name,
//     "with value:",
//     event.target.value
//   );
// });

//Note:---> Isme jb focusout krke dusra pr jayenge tb first wala print hogaa. Isme bhi first wala load nhi hua hai jb hm us pr click krenege aur phhir dusre pe jayenge tb pahle wala print hogaa.

// ***************************** Click Events *******************************************
// form.addEventListener("click", (event) => {
//   console.log("First Clicked");
// });
// Note:--> Jitna Baar Click krenge Utna Time Show Hogaa.

// ***************************** dblClick Events (Explain later) ********************************
// form.addEventListener("dblclick", (event) => {
//   console.log("Double Clicked");
// });

// ************************ Submit *******************************************
// form.addEventListener("submit", (event) => {
//   console.log("form submitted");
// });

// ************************ Reset *******************************************
// form.addEventListener("reset", (event) => {
//   console.log("form reset");
// });

// ***************** Event.preventDefault() ***************************************
// note:--->

// event.preventDefault(); is used to stop the default behavior of an event.
// In the case of a form submit, the default behavior is:------------->
// The browser sends the form data to the server (or reloads the page if no action is set).
// By calling event.preventDefault();, you stop the form from reloading/redirecting, so you can handle the form submission with JavaScript (e.g., validation, showing results, sending data via AJAX).

// +++++++++++++++++++ Project Begin +++++++++++++++++++++++++++++++++++++++++++++++++++++

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.value); // undefined
  // why:----->
  // event.target refers to the entire <form> element, not a single <input>.
  // A <form> itself does not have a .value property, so event.target.value will be undefined.

  //   const first = document.getElementById("first");
  //   console.log(first.value);

  //   const second = event.target.querySelector("input[name='LastName']").value;
  //   console.log(second);

  // const third = document.getElementById("third").value;
  // console.log(third);

  // ++ Here we have only 3 input. suppose we have 1000 of input then what we do:-----> +++++++
  const data = new FormData(form);
  // console.log(data); // FormData {}
  //   console.log(data.keys()); // FormData Iterator {}

  //   for (let key of data.keys()) {
  //     console.log(key); // working (it give the key like Name,LastName,Age)
  //   }

  // output of upper code:--->
  //   Name
  // LastName
  // Age

  // for (let key of data.entries()) {
  //   console.log(key); // working (it give the output in (key,value) pair)
  // }

  // output of upper code:--->
  // (2) ['Name', 'Monu']
  // (2) ['LastName', 'Kumar']
  // (2) ['Age', '21']

    for (let [key, value] of data.entries()) {
      console.log(key, value); // working (it give the output in (key,value) pair)
    }

    // output of upper code:--->
    //    Name Monu
    //  LastName Kumar
    //  Age 21

    // console.log(Array.from(data.keys())); // (3) ['Name', 'LastName', 'Age']
    // console.log(Array.from(data.values())); // (3) ['Monu', 'Kumar', '54']

    // const result = document.getElementById("result");
    // result.innerText = `User first name is ${first.value}, last name is ${second} and age is ${third}`;

    // document.body.append(result);
});
