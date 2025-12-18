// ++++++++++++++++ Create a Element +++++++++++++++++++++++++++
// Create one more list using javascript.
// Adding one items:--->
const element = document.createElement("li");
element.innerHTML = "TS";

// Attaching to ul
const parent = document.getElementById("root");
parent.appendChild(element);

// +++++++ Using function and adding items +++++++++++

function attach(content) {
  const element = document.createElement("li");
  element.innerHTML = content;
  const element2 = document.createElement("li");
  element2.innerHTML = content + "V2.0";

  // Attaching to ul
  const parent = document.getElementById("root");
  //   parent.appendChild(element);
  parent.append(element, element2);
}

attach("React");
attach("Node");

// +++++++++++++++ Create a Text Node ++++++++++++++++++++++++++++
const element2 = document.createTextNode("Hello Coder Army");
const parent2 = document.getElementById("root");
parent2.append(element2);

// ++++++++++++++++ Create a Attribute Node ++++++++++++++++++++++++++
const element3 = document.createAttribute("id");
element3.value = "first";

// +++++ Access to first li +++++
const curr_list = document.querySelector("li");
curr_list.setAttributeNode(element3);

// +++++ Access to second li and adding class ++++++
const element4 = document.createAttribute("class");
element4.value = "second";

const parent4 = document.getElementById("root");
// console.log(parent.children[1]); // here coming the second list in console
parent4.children[1].setAttributeNode(element4);

// ++++++++ Access attribute of a element +++++++++++++++++++++++++

const element5 = document.getElementById("root");
console.log(element5.getAttribute("id")); // root
console.log(element5.getAttribute("class")); // hii
console.log(element5.getAttribute("style")); // null

// ++++ if we want to give the value +++++++
element5.setAttribute("custom", "20"); // check element in browser custom = "20" is added
// +++ Change the class name +++++++
element5.setAttribute("class", "Rohan"); // class name is changed
element5.removeAttribute("custom");

// +++++++++++++ Adds Node to the DOM ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const parent5 = document.getElementById("root");
const element6 = document.createElement("li");
element6.innerHTML = "TypeScript";

// parent5.prepend(element6); // TypeScript sabse pahle chala jayegaa
// parent5.append(element6); // TypeScript sabse last me chala jayegaa

// +++++ Upar,niche wala ho gya agr bich me ya kahi dalna ho to +++++++++
const child2 = parent5.children[1];
// console.log(child2); // <li class = "second">HTML</li>

// insertBefore(newNode,referenceNode)

// parent5.insertBefore(element6, child2); // TypeScript is before the HTML
parent5.replaceChild(element6, child2); // HTML is removed and TypeScript Take Place

// +++++++ we can do same work with innerHtml +++++++++++++++++
const parent6 = document.getElementById("root");
// parent6.innerHTML = "SpringBoot";  //all item of ul removed and SpringBoot only appear in output
// parent6.innerHTML += "SpringBoot"; // SpringBoot present at the end
parent6.innerHTML += "<li>SpringBoot</li>"; // SpringBoot present at the end
// const child = parent6.children[3];
// child.innerHTML = "Monu"; // JS is removed and there monu is present

// // ++++ We want to add div before ul then +++++++++++++++++++++++++++++
const parent7 = document.getElementById("root");
const element7 = document.createElement("div");
element7.innerHTML = "Hello Coder Army";
// parent7.insertAdjacentElement("beforebegin", element7); // This place the div before the ul
// parent7.insertAdjacentElement("afterbegin", element7); // ul ke baad div aayega(Browser element me dekhe )
// parent7.insertAdjacentElement("beforeend", element7); // This place the div before the ul end
parent7.insertAdjacentElement("afterend", element7); // This place the div end of the ul

// ++++++++++++ Deleting Nodes or Elements ++++++++++++++++++
const parent8 = document.getElementById("root");
// const child3 = parent8.children[3].remove();

// +++++ Type-2 +++++++++
const parent9 = document.getElementById("root");
const fourthChild = parent9.children[3]; // index 3 = 4th child
parent8.removeChild(fourthChild);
