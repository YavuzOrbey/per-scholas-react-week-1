function sayHi(name, city) {
    if (city) {
        var response_1 = { name: name, city: city };
    }
    else {
        var response_2 = { name: name };
    }
    return response;
}
var response = sayHi("hello");
console.log(response);
var recentWeather = [true, false, false, true, true, false, false, false];
var recentSunnyWeather = recentWeather.filter(function (element) { return element == true; });
var recentBadWeather = recentWeather.filter(function (element) { return element == false; });
console.log(recentSunnyWeather.length);
console.log(recentBadWeather.length);
