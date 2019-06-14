// Given information

var configJson = {
    "title": "Contact List", 
    "uri":"https://api.randomuser.me/",
    "numberCards": 120,
    "tabs": ["a", "b", "c", "d", "e", "f", "g","h",
    "i", "j", "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"]
}


$(document).ready(function () {
    var tabs = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
        "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
        "23": "w", "24": "x", "25": "y", "26": "z"
};
    $.each(tabs, function (key, value) {
        $("#result").append('<li>' + '<a>' + value + '</a>' + '</li>');
    });
    $.each(tabs, function (key, value) {
        $("li").attr('id', key);
    });
});

// Adding id to li 
// $(document).ready(function() {
   
// })

