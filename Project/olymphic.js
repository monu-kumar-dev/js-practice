const id = document.getElementById("first");

function timer() {
  const now = new Date();
  const future = new Date("2028-07-21T00:00:00");
  const remain = future - now;
  // id.innerHTML = remain;
  const days = Math.floor(remain / (1000 * 60 * 60 * 24));
  // id.innerHTML = days;
  const hours = Math.floor((remain / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((remain / (1000 * 60)) % 60);
  const seconds = Math.floor((remain / 1000) % 60);

  //   +++++++++++ LONG ++++++++++++

  //   id.innerHTML = `
  //     <span style="font-size:4rem">${days} days,</span>
  //     <div>
  //     <span style = "font-size:2rem">${hours} hours</span>,
  //     <span style = "font-size:2rem">${mins}minutes</span>,
  //     <span style = "font-size:2rem">${seconds}seonds</span>,
  //     </div>
  //     `;

  // +++++++++++++ InShort ++++++++++++
  //   id.innerHTML = `
  //     <div style="font-size:4rem; margin-bottom:10px;">
  //       ${days} days,
  //     </div>
  //     <div style="font-size:2rem;">
  //       ${hours} hours, ${mins} minutes, ${seconds} seconds
  //     </div>
  //   `;

  //   ++++++++++++++++++ Adding some properties ++++++++++++++++++++

  id.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:4rem;">${days}</div>
      <div style="font-size:1.1rem;">days</div>
      <div style="display:flex; justify-content:center; gap:20px; margin-top:10px;">
        <div style="text-align:center;">
          <div style="font-size:2rem;">${hours}</div>
          <div style="font-size:1.1rem;">hrs</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:2rem;">${mins}</div>
          <div style="font-size:1.1rem;">min</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:2rem;">${seconds}</div>
          <div style="font-size:1.1rem;">sec</div>
        </div>
      </div>
    </div>
  `;
}

const time = setInterval(timer, 1000);
timer();

id.style.fontSize = "4rem";
id.style.display = "flex";
// id.style.flexDirection = "column";
id.style.justifyContent = "center";
id.style.alignItems = "center";
id.style.height = "100vh";
// id.style.width = "30vw";
