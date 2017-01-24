/**
 * Created by jesica on 10/30/2016.
 */

var mainTemp;
var minTemp;
var maxTemp;
/*ACCESS TO WEATHER API*/

function position(geo) {

    var lat = geo.coords.latitude;
    var long = geo.coords.longitude;
    var appID = "f7a2f7e1e958844a8f3477fa0e0ba302";


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid="+ appID
        + "&units=metric", weather)
}

/*LOCAL DATE*/

function setTime() {

    $("#dateStyle").html(new Date().toLocaleString());
    setTimeout(setTime, 1000);
}


/*CHANGE CELSIUS//FAHRENHEIT*/

function changeUnits() {


    // if ($("#celsButton").prop("checked") == true) {
    if ($("#celsButton").text() == "°C") {

        console.log("cambiando a celsius");

        $("#celsButton").html("°F");

        $("#highTemp").html(maxTemp + "°C");
        $("#lowTemp").html(minTemp + "°C");
        $(".temperatureStyle").html(mainTemp + "°C");

    } else {

        console.log("cambiando a fahrenheit");
        $("#celsButton").html("°C");

        $("#highTemp").html(Math.round(maxTemp * 1.8 + 32) + "°F");
        $("#lowTemp").html(Math.round(minTemp * 1.8 + 32) + "°F");
        $(".temperatureStyle").html(Math.round(mainTemp * 1.8 + 32) + "°F");
    }
}


/*ACCESS TO MAIN VALUES OF WEATHER API*/
function weather(response) {
    console.log(response);

    mainTemp = Math.round(response.main.temp);
    maxTemp = Math.round(response.main.temp_max);
    minTemp = Math.round(response.main.temp_min);

    $("#cityStyle").html(response.name);
    $("#highTemp").html(maxTemp + "°C");
    $("#lowTemp").html(minTemp + "°C");
    $(".temperatureStyle").html(mainTemp + "°C");
    $(".descriptionStyle").html(response.weather[0].main);


    /*CUSTOMIZE IMAGES & BACKGROUND*/

    var weatherDescription = response.weather[0].icon;

    if (weatherDescription == "01d" || weatherDescription == "01n") {

        $("#image").attr("src", "images/clear_sky.png");
        $(".backgroundColor").css("background", "#66ccff");

    } else if (weatherDescription == "02d" || weatherDescription == "02n") {

        $("#image").attr("src", "images/few_clouds.png");
        $(".backgroundColor").css("background", "#c4bfb9");

    } else if (weatherDescription == "03d" || weatherDescription == "03n") {

        $("#image").attr("src", "images/scattered_clouds.png");
        $(".backgroundColor").css("background", "#c4bfb9");

    } else if (weatherDescription == "04d" || weatherDescription == "04n") {

        $("#image").attr("src", "images/broken_clouds.png");
        $(".backgroundColor").css("background", "#aea79e");

    } else if (weatherDescription == "09d" || weatherDescription == "09n") {

        $("#image").attr("src", "images/shower_rain.png");
        $(".backgroundColor").css("background", "#a29a90");

    } else if (weatherDescription == "10d" || weatherDescription == "10n") {

        $("#image").attr("src", "images/rain.png");
        $(".backgroundColor").css("background", "#C0C0C0");

    } else if (weatherDescription == "11d" || weatherDescription == "11n") {

        $("#image").attr("src", "images/thunderstorm.png");
        $(".backgroundColor").css("background", "#978d82");

    } else if (weatherDescription == "13d" || weatherDescription == "13n") {

        $("#image").attr("src", "images/snow.png");
        $(".backgroundColor").css("background", "#d1cdc7");

    } else if (weatherDescription == "50d" || weatherDescription == "50n") {

        $("#image").attr("src", "images/mist.png");
        $(".backgroundColor").css("background", "#b3b3b3");
    }
}

/* CALL FUNCTIONS */

$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(position);
    setTime();
    // $("#celsButton").change(changeUnits());

    $("#celsButton").click(changeUnits);
});