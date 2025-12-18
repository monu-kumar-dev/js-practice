document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's Temprature: ${data.current.temp_c}`;
  }

  const prom = fetch(
    `https://api.weatherapi.com/v1/current.json?key=96fa8ac9fece49ff9f642346251809&q=${place}&aqi=yes`
  );

  prom.then((response) => response.json()).then((data) => updateTemp(data));
});
