let temperatureField = document.querySelector(".temp");
let cityField = document.querySelector(".time_location p");
let dateFiled = document.querySelector(".time_location span");
let searchField = document.querySelector(".searchField");
let emojiFiled = document.querySelector(".weather_condition img");
let weatherFiled = document.querySelector(".weather_condition span");
let form = document.querySelector("form");

let target = "Delhi";
let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


form.addEventListener("submit",function(e){
    // console.log(e);
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
})


async function fetchData(target){
    try{
    let url = `http://api.weatherapi.com/v1/current.json?key=882f1adb930a45d7852160114232705&q=${target}&aqi=no`;
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let currentTemp = data.current.temp_c;
    let currentCondition = data.current.condition.text;
    let locationName = data.location.name
    let localTime = data.location.localtime
    let conditionEmoji = data.current.condition.icon
    console.log(locationName,currentTemp,currentCondition,localTime,conditionEmoji);
    updateDOM(locationName,currentTemp,currentCondition,localTime,conditionEmoji);
    }
    catch(error){
        alert("Please put a valid location");
        console.log(error);
    }
}

function updateDOM(locationName,temp,condition,dateTime,conditionEmoji){
    let arr = dateTime.split(" ");
    // console.log(arr);
    let date = arr[0];
    let time = arr[1];
    let dayNumber = new Date(date).getDay();
    console.log(dayArr[dayNumber]);
    let dayName = dayArr[dayNumber];
    dateFiled.innerText = `${time} ${dayName} ${date}`;
    temperatureField.innerText = temp;
    cityField.innerText = locationName;
    emojiFiled.src = conditionEmoji;
    weatherFiled.innerText = condition
}


function getNameOfDay(num){

    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday"
        default:
            return "Don't Know" 
    }
    
}



fetchData(target);