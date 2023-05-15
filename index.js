function updateDateTime() {
  let londonElement = document.querySelector(".london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    setInterval(function () {
      let londonTime = moment().tz("Europe/London");
      londonDateElement.innerHTML = londonTime.format("DD MMMM Y");
      londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");
    }, 1000);
  }

  let tokyoElement = document.querySelector(".tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    setInterval(function () {
      let tokyoTime = moment().tz("Asia/Tokyo");
      tokyoDateElement.innerHTML = tokyoTime.format("DD MMMM Y");
      tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
    }, 1000);
  }
}

updateDateTime();
