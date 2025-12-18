document.body.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  //   circle.className = "circle";
  circle.classList.add("circle"); // it is same as up
  //   circle.textContent = "Hi";

  //   If we want random text
  const words = [
    "Hi",
    "Ok",
    "Hey",
    "Run",
    "Fun",
    "Win",
    "Sun",
    "Max",
    "Top",
    "Joy",
    "Bye",
  ];
  circle.textContent = words[Math.floor(Math.random() * words.length)];

  //   where is click bubble created
  const x = event.clientX;
  const y = event.clientY;

  //  Note:---->why we subtract 25 from left and 25 from top? Answer:--> jaha hm click kr rhe hai waha se corner bannaa suru ho rha hai. But hm chahte hai ki jaha click kre waha mid ho islye.
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  document.body.appendChild(circle);

  //   Background Color Different
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
  ];
  const random = Math.floor(Math.random() * colors.length);
  circle.style.backgroundColor = colors[random];

  // If background is white, make text black
  if (colors[random] === "white") {
    circle.style.color = "black";
  }

  // Remove after 5 sec
  setTimeout(() => {
    // iska use:--> Hm Nhi Chahte script me div bhara rhe jitna baar click kre utna baar, islye hm div ko remove kr rhe hai.
    circle.remove();
  }, 5000);
});
