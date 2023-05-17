let timerInterval;

function startTimer(cityTime, dateElements, timeElements) {
  clearInterval(timerInterval);

  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerHTML = cityTime.format("DD MMMM Y");
  }

  function updateTime() {
    for (let i = 0; i < timeElements.length; i++) {
      timeElements[i].innerHTML = cityTime.format("h:mm A");
    }
  }

  updateTime();

  timerInterval = setInterval(updateTime, 1000);
}

function initializeCity() {
  let selectElement = document.getElementById("city-selector");
  selectElement.addEventListener("change", updateCity);

  let selectedCity = selectElement.value;
  updateCity({ target: selectElement });
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

  if (event.target.value === "cairo") {
    newCityElement.innerHTML = "Cairo";
    startTimer(cairoTime, newDateElements, newTimeElements);
  } else if (event.target.value === "sanFransisco") {
    newCityElement.innerHTML = "San Francisco";
    startTimer(sanFranciscoTime, newDateElements, newTimeElements);
  } else if (event.target.value === "tokyo") {
    newCityElement.innerHTML = "Tokyo";
    startTimer(tokyoTime, newDateElements, newTimeElements);
  } else if (event.target.value === "currentLocation") {
    currentCity();
  } else {
    newCityElement.innerHTML = "London";
    startTimer(londonTime, newDateElements, newTimeElements);
  }
}

function currentCity() {
  let currentCityElement = document.getElementById("location");
  let currentDateElements = document.querySelectorAll(
    ".date-time .currentDate"
  );
  let currentTimeElements = document.querySelectorAll(
    ".date-time .currentTime"
  );
  let currentTime = moment();
  let currentLocation = moment.tz.guess();

  currentCityElement.innerHTML = currentLocation;

  currentDateElements.forEach((element) => {
    element.innerHTML = currentTime.format("DD MMMM Y");
  });

  currentTimeElements.forEach((element) => {
    element.innerHTML = currentTime.format("h:mm A");
  });
}

const selectElement = document.getElementById("city-selector");
initializeCity();
