const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");
let work = document.getElementById("work");
let play = document.getElementById("play");
let study = document.getElementById("study");
let exercise = document.getElementById("exercise");
let social = document.getElementById("social");
let selfCare = document.getElementById("self-care");

let previousWork = document.getElementById("previous-work");
let previousPlay = document.getElementById("previous-play");
let previousStudy = document.getElementById("previous-study");
let previousExercise = document.getElementById("previous-exercise");
let previousSocial = document.getElementById("previous-social");
let previousSelfCare = document.getElementById("previous-self-care");



let data = []

async function getData() {
    let dataList = "./data.json"
    try {
      const response = await fetch(dataList)
      data = await response.json()
      
      getWeekly();
    } catch(error) {
        console.log(error)
    }
}

function getDaily(){
  
  work.textContent = `${data[0].timeframes.daily.current}hrs` ;
  play.textContent = `${data[1].timeframes.daily.current}hrs` ;
  study.textContent = `${data[2].timeframes.daily.current}hrs` ;
  exercise.textContent = `${data[3].timeframes.daily.current}hrs` ;
  social.textContent = `${data[4].timeframes.daily.current}hrs` ;
  selfCare.textContent = `${data[5].timeframes.daily.current}hrs` ;
  
  previousWork.textContent = `Previous - ${data[0].timeframes.daily.previous}hrs` ;
  previousPlay.textContent = `Previous - ${data[1].timeframes.daily.previous}hrs` ;
  previousStudy.textContent = `Previous - ${data[2].timeframes.daily.previous}hrs` ;
  previousExercise.textContent = `Previous - ${data[3].timeframes.daily.previous}hrs` ;
  previousSocial.textContent = `Previous - ${data[4].timeframes.daily.previous}hrs` ;
  previousSelfCare.textContent = `Previous - ${data[5].timeframes.daily.previous}hrs` ;
}

function getWeekly() {

  work.textContent = `${data[0].timeframes.weekly.current}hrs` ;
  play.textContent = `${data[1].timeframes.weekly.current}hrs` ;
  study.textContent = `${data[2].timeframes.weekly.current}hrs` ;
  exercise.textContent = `${data[3].timeframes.weekly.current}hrs` ;
  social.textContent = `${data[4].timeframes.weekly.current}hrs` ;
  selfCare.textContent = `${data[5].timeframes.weekly.current}hrs` ;

  previousWork.textContent = `Previous - ${data[0].timeframes.weekly.previous}hrs` ;
  previousPlay.textContent = `Previous - ${data[1].timeframes.weekly.previous}hrs` ;
  previousStudy.textContent = `Previous - ${data[2].timeframes.weekly.previous}hrs` ;
  previousExercise.textContent = `Previous - ${data[3].timeframes.weekly.previous}hrs` ;
  previousSocial.textContent = `Previous - ${data[4].timeframes.weekly.previous}hrs` ;
  previousSelfCare.textContent = `Previous - ${data[5].timeframes.weekly.previous}hrs` ;
  
  
}

function getMonthly() {
  work.textContent = `${data[0].timeframes.monthly.current}hrs` ;
  play.textContent = `${data[1].timeframes.monthly.current}hrs` ;
  study.textContent = `${data[2].timeframes.monthly.current}hrs` ;
  exercise.textContent = `${data[3].timeframes.monthly.current}hrs` ;
  social.textContent = `${data[4].timeframes.monthly.current}hrs` ;
  selfCare.textContent = `${data[5].timeframes.monthly.current}hrs` ;

  previousWork.textContent = `Previous - ${data[0].timeframes.monthly.previous}hrs` ;
  previousPlay.textContent = `Previous - ${data[1].timeframes.monthly.previous}hrs` ;
  previousStudy.textContent = `Previous - ${data[2].timeframes.monthly.previous}hrs` ;
  previousExercise.textContent = `Previous - ${data[3].timeframes.monthly.previous}hrs` ;
  previousSocial.textContent = `Previous - ${data[4].timeframes.monthly.previous}hrs` ;
  previousSelfCare.textContent = `Previous - ${data[5].timeframes.monthly.previous}hrs` ;
  
  
}




dailyButton.addEventListener("click",() => {getDaily()});

weeklyButton.addEventListener("click",() => {getWeekly()});

monthlyButton.addEventListener("click",() => {getMonthly()});

getData();
