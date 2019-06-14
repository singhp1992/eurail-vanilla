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
});

// Adding id to li 
$(document).ready(function() {
    $("nav li").each(function (i) {
        $(this).attr("id", i+1 );
    });
})

// // Creating another div
// const $div = $('<button>more info here</button>');

// // Adding another div to the section
// $('.main').append($div)

// // add a class name to the div
// $('div').addClass('content')

// // on click, new div appears 
// $('li').on('click',)

// // add id to button in div
// $('button').attr("id", "preeti")

// // make something appear when button is clicked
// $(document).ready(function () {
//     $('#1').on('click', function () {
//         var newButton = '<p>hehehe</p>';
//         $('.main').append(newButton)
//     });
// })






