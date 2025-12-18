function timing() {
  const timer = document.getElementById("root");
  const now = new Date();
  const IndianTime = now.toLocaleTimeString();
  timer.innerHTML = IndianTime;
}
// timing(); // runing only one time but i need infinity

// so try while loop:------>(But ye baar baar call hote ja rha hai. Itni Baar call ho rha hai ki program usko display hi nhi kra pa rha hai.)

// while (true) {
//   timing();
// }

// so, using setInterval
setInterval(timing, 1000);

const timer = document.getElementById("root");
timer.style.fontSize = "6rem";
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";
// timer.style.backgroundColor = "red";   // using for check why my alignItems not work
timer.style.height = "100vh";
