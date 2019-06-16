// creating tabs
$(document).ready(function () {
    var tabs = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
        "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
        "23": "w", "24": "x", "25": "y", "26": "z"
    };
    $.each(tabs, function (key, value) {
        $("#result").append('<li>' + value + '</li>');
    });
});

// Adding ids to every <li> tags 
$(document).ready(function() {
    $("nav li").each(function (i) {
        $(this).attr("id", i+1 );
    });
})

// adding ACTIVE class to first tab
$(window).load(function () {
    $('nav li:first').addClass("active");
});

// ACTIVE class changing 
$(document).on('click', 'nav li', function () {
    $(this).addClass('active').siblings().removeAttr('class', 'active')
})

// Adding ACTIVE to li elements
$(document).on('click', 'div ul li', function () {
    $(this).addClass('active').siblings().removeAttr('class', 'active')
})

// // Creating another div below the tabs
// const $div = $('<div> </div>');

// // Appending div into the container
// $('.container').append($div)

// // add a class name to the div
// $('div').addClass('content')

// // adding a ul to the div
// const $ul = $('<ul>  </ul>')

// // appending into the div
// $('.content').append($ul)

// // adding ID to the UL 
// $('ul').attr('id', 'a')






