// Given information

var configJson = {
    "title": "Contact List", 
    "uri":"https://api.randomuser.me/",
    "numberCards": 120,
    "tabs": ["a", "b", "c", "d", "e", "f", "g","h",
    "i", "j", "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"]
}

console.log(configJson.title)

// Dynamically creating structure

// creating tabs
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

// Adding ids to every <li> tags 
$(document).ready(function() {
    $("nav li").each(function (i) {
        $(this).attr("id", i+1 );
    });
})

// Creating another div below the tabs
const $div = $('<div> </div>');

// Appending div into the container
$('.container').append($div)

// add a class name to the div
$('div').addClass('content')

// adding a ul to the div
const $ul = $('<ul> </ul>')

// appending into the div
$('.content').append($ul)

// adding ID to the UL 
$('ul').attr('id', 'a')

//adding uls of each alphabet
// $(document).ready(function () {
//     var tabs = {
//         "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
//         "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
//         "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
//         "23": "w", "24": "x", "25": "y", "26": "z"
//     };
//     $.each(tabs, function (key, value) {
//         $(".content").append('<ul class="cards">'+ '<li>'+ value + '</li>' + '</ul>');
//     });
// });

// adding multiple lis to it
$(document).ready(function () {
    var listItems = {'Anderson': 'Simon', 'Ames': 'Miranda', 'Adams':'John', 'Abela':'Jacque', 
        'Abrahamson': 'Nicole', 'Anguillo': 'Buster', 'Arms': 'Griffin', 'Axel': 'Connie', 'Aon': 'Cosmo',
        'Amily': 'Nancy' }
    $.each(listItems, function (key, value) {
        $("#a").append('<li>' + '<a>' + key + ', ' +  value + '</a>' + '</li>');
    });
});

// Adding IDs to each li tag in the a name
$(document).ready(function () {
    $("div li").each(function (i) {
        $(this).attr("id", i + 1);
    });
})

// MY FUNCTION ON EACH TAB
// $(document).ready(function () {
//     $("nav li").each(function (i) {
//         $(this).attr("onclick", 'my' + i + 'Function()');
//     });
// })

// adding A interactivity
// function my0Function(id) {
//     var x = document.getElementById('a');
//     x.style.display = "inline-flex";
// }

// adding selected class to first tab
$(window).load(function () {
    $('nav li:first').addClass("active");
});

// selecting tab 
$(document).on('click', 'nav li', function() {
    $(this).addClass('active').siblings().removeAttr('class','active')
})



// api fetch
fetch('https://api.randomuser.me/')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest

    })
    .catch(error => console.error(error))





