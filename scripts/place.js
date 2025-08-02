  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Update: ${document.lastModified}`;
  }
  
// ========== Weather: Wind Chill Calculation ==========
const temperatureC = 14; // Static value from weather section
const windSpeedKmh = 10; // Static value from weather section

function calculateWindChill(tempC, speedKmh) {
  // Fórmula válida apenas para T <= 10 °C e vento > 4.8 km/h
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Verifica se os critérios são válidos para calcular o wind chill
const windChillCell = document.querySelector('.weather-box table').rows[3].cells[1];

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  const windChill = calculateWindChill(temperatureC, windSpeedKmh);
  windChillCell.textContent = `${windChill} ºC`;
} else {
  windChillCell.textContent = 'N/A';
}
