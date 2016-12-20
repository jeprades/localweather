/**
 * Created by jesica on 10/30/2016.
 */


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
}


/*ACCESS TO MAIN VALUES OF WEATHER API*/
function weather(response) {
    // console.log(response);

    $("#cityStyle").html(response.name);
    $("#highTemp").html(response.main.temp_max + "°");
    $("#lowTemp").html(response.main.temp_min + "°");
    $(".temperatureStyle").html(Math.round(response.main.temp) + "°");
    $(".descriptionStyle").html(response.weather[0].main);


    /*CUSTOMIZE IMAGES & BACKGROUND*/

    var weatherDescription = response.weather[0].description;

    if (weatherDescription == "clear sky") {

        $("#image").attr("src", "images/clear_sky.png");
        $(".backgroundColor").css("background", "#66ccff");

    } else if (weatherDescription == "few clouds") {

        $("#image").attr("src", "images/few_clouds.png");
        $(".backgroundColor").css("background", "#c4bfb9");

    } else if (weatherDescription == "scattered clouds") {

        $("#image").attr("src", "images/scattered_clouds.png");
        $(".backgroundColor").css("background", "#c4bfb9");

    } else if (weatherDescription == "broken clouds"){

        $("#images").attr("src", "images/broken_clouds.png");
        $(".backgroundColor").css("background", "#aea79e");

    } else if (weatherDescription == "shower rain") {

        $("#image").attr("src", "images/shower_rain.png");
        $(".backgroundColor").css("background", "#a29a90");

    } else if (weatherDescription == "rain") {

        $("#image").attr("src", "images/rain.png");
        $(".backgroundColor").css("background", "#C0C0C0");

    } else if (weatherDescription == "thunderstorm") {

        $("#image").attr("src", "images/thunderstorm.png");
        $(".backgroundColor").css("background", "#978d82");

    } else if (weatherDescription == "snow") {

        $("#image").attr("src", "images/snow.png");
        $(".backgroundColor").css("background", "#d1cdc7");

    }
}

/* CALL FUNCTIONS */

$(document).ready(function () {
    navigator.geolocation.getCurrentPosition(position);
    setTime();
});
