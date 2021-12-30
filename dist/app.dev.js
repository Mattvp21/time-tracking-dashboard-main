"use strict";

var dailyButton = document.getElementById("daily");
var weeklyButton = document.getElementById("weekly");
var monthlyButton = document.getElementById("monthly");
var work = document.getElementById("work");
var play = document.getElementById("play");
var study = document.getElementById("study");
var exercise = document.getElementById("exercise");
var social = document.getElementById("social");
var selfCare = document.getElementById("self-care");
var previousWork = document.getElementById("previous-work");
var previousPlay = document.getElementById("previous-play");
var previousStudy = document.getElementById("previous-study");
var previousExercise = document.getElementById("previous-exercise");
var previousSocial = document.getElementById("previous-social");
var previousSelfCare = document.getElementById("previous-self-care");
var data = [];

function getData() {
  var dataList, response;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dataList = "./data.json";
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(dataList));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          getWeekly();
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
}

function getDaily() {
  work.textContent = "".concat(data[0].timeframes.daily.current, "hrs");
  play.textContent = "".concat(data[1].timeframes.daily.current, "hrs");
  study.textContent = "".concat(data[2].timeframes.daily.current, "hrs");
  exercise.textContent = "".concat(data[3].timeframes.daily.current, "hrs");
  social.textContent = "".concat(data[4].timeframes.daily.current, "hrs");
  selfCare.textContent = "".concat(data[5].timeframes.daily.current, "hrs");
  previousWork.textContent = "Previous - ".concat(data[0].timeframes.daily.previous, "hrs");
  previousPlay.textContent = "Previous - ".concat(data[1].timeframes.daily.previous, "hrs");
  previousStudy.textContent = "Previous - ".concat(data[2].timeframes.daily.previous, "hrs");
  previousExercise.textContent = "Previous - ".concat(data[3].timeframes.daily.previous, "hrs");
  previousSocial.textContent = "Previous - ".concat(data[4].timeframes.daily.previous, "hrs");
  previousSelfCare.textContent = "Previous - ".concat(data[5].timeframes.daily.previous, "hrs");
}

function getWeekly() {
  work.textContent = "".concat(data[0].timeframes.weekly.current, "hrs");
  play.textContent = "".concat(data[1].timeframes.weekly.current, "hrs");
  study.textContent = "".concat(data[2].timeframes.weekly.current, "hrs");
  exercise.textContent = "".concat(data[3].timeframes.weekly.current, "hrs");
  social.textContent = "".concat(data[4].timeframes.weekly.current, "hrs");
  selfCare.textContent = "".concat(data[5].timeframes.weekly.current, "hrs");
  previousWork.textContent = "Previous - ".concat(data[0].timeframes.weekly.previous, "hrs");
  previousPlay.textContent = "Previous - ".concat(data[1].timeframes.weekly.previous, "hrs");
  previousStudy.textContent = "Previous - ".concat(data[2].timeframes.weekly.previous, "hrs");
  previousExercise.textContent = "Previous - ".concat(data[3].timeframes.weekly.previous, "hrs");
  previousSocial.textContent = "Previous - ".concat(data[4].timeframes.weekly.previous, "hrs");
  previousSelfCare.textContent = "Previous - ".concat(data[5].timeframes.weekly.previous, "hrs");
}

function getMonthly() {
  work.textContent = "".concat(data[0].timeframes.monthly.current, "hrs");
  play.textContent = "".concat(data[1].timeframes.monthly.current, "hrs");
  study.textContent = "".concat(data[2].timeframes.monthly.current, "hrs");
  exercise.textContent = "".concat(data[3].timeframes.monthly.current, "hrs");
  social.textContent = "".concat(data[4].timeframes.monthly.current, "hrs");
  selfCare.textContent = "".concat(data[5].timeframes.monthly.current, "hrs");
  previousWork.textContent = "Previous - ".concat(data[0].timeframes.monthly.previous, "hrs");
  previousPlay.textContent = "Previous - ".concat(data[1].timeframes.monthly.previous, "hrs");
  previousStudy.textContent = "Previous - ".concat(data[2].timeframes.monthly.previous, "hrs");
  previousExercise.textContent = "Previous - ".concat(data[3].timeframes.monthly.previous, "hrs");
  previousSocial.textContent = "Previous - ".concat(data[4].timeframes.monthly.previous, "hrs");
  previousSelfCare.textContent = "Previous - ".concat(data[5].timeframes.monthly.previous, "hrs");
}

dailyButton.addEventListener("click", function () {
  getDaily();
});
weeklyButton.addEventListener("click", function () {
  getWeekly();
});
monthlyButton.addEventListener("click", function () {
  getMonthly();
});
getData();