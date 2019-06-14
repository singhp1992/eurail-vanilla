// Given information

var configJson = {
    "title": "Contact List", 
    "uri":"https://api.randomuser.me/",
    "numberCards": 120,
    "tabs": ["a", "b", "c", "d", "e", "f", "g","h",
    "i", "j", "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"]
}

console.log(configJson.tabs)

$(document).ready(function () {
    var supercarObject = { "brand": "Lamborghini", "model": "Huracan", "origin": "Italy" };
    $.each(supercarObject, function (key, value) {
        $("#result").append(key + ": " + value + '<br>');
    });
});