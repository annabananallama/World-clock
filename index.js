let timerInterval;

function startTimer(cityTime, dateElements, timeElements) {
  clearInterval(timerInterval);

  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerHTML = cityTime.format("DD MMMM Y");
  }

  function updateTime() {
    for (let i = 0; i < timeElements.length; i++) {
      timeElements[i].innerHTML = cityTime.format("h:mm:ss A");
    }
  }

  updateTime();

  timerInterval = setInterval(updateTime, 1000);
}

function updateCity(event) {
  let newCityElement = document.getElementById("londonName");
  let newDateElements = document.querySelectorAll(".update .date");
  let newTimeElements = document.querySelectorAll(".update .time");
  let cairoTime = moment().tz("Africa/Cairo");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");
  let londonTime = moment().tz("Europe/London");
  let tokyoTime = moment().tz("Asia/Tokyo");

  clearInterval(timerInterval);

  if (event && event.target.value === "cairo") {
    newCityElement.innerHTML = "Cairo";
    startTimer(cairoTime, newDateElements, newTimeElements);
  } else if (event && event.target.value === "sanFransisco") {
    newCityElement.innerHTML = "San Francisco";
    startTimer(sanFranciscoTime, newDateElements, newTimeElements);
  } else if (event && event.target.value === "tokyo") {
    newCityElement.innerHTML = "Tokyo";
    startTimer(tokyoTime, newDateElements, newTimeElements);
  } else {
    newCityElement.innerHTML = "London";
    startTimer(londonTime, newDateElements, newTimeElements);
  }
}

function currentLocation(event) {
  let currentCityElement = docuement.getElementById("location");
  let currentDateElements = document.querySelectorAll(".date-time .date");
  let currentTimeElements = document.querySelectorAll(".date-time .time");
  let cityTime = moment().tz.guess();
  let currentTime = moment().tz(guessedTimeZone);
  let location = guessedTimeZone;
  let time = currentTime.format("HH:mm");
  let date = currentTime.format("YYYY-MM-DD");

  if (event && event.target.value === "currentLocation") {
    currentCityElement.innerHTML = location;
    currentDateElements.innerHTML = date;
    currentTimeElements.innerHTML = time;
  }
}

function initializeCity() {
  let selectElement = document.getElementById("city-selector");
  let selectedCity = selectElement.value;

  updateCity({ target: { value: selectedCity } });
}

const selectElement = document.getElementById("city-selector");
selectElement.addEventListener("change", updateCity);

initializeCity();
