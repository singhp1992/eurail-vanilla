// creating ul tags and API call when window loads
$(window).load(function () {
    var ul = {
        "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
        "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
        "23": "w", "24": "x", "25": "y", "26": "z"
    };
    $.each(ul, function (key, value) {
        $(".content").append('<ul id='+ '"' + value + '"' + "class='hide'" + "> </ul>");
    });

    // creating .cards div
    $(".cards").append('<img src="https://randomuser.me/api/portraits/women/85.jpg">');
    var cardInfo = ['E-mail', 'Phone', 'Street', 'City', 'State', 'Postcode']
    $.each(cardInfo, function (i) {
        $(".cards").append('<p class="underline" id=' + '"' + cardInfo[i] + '"' + ">" + cardInfo[i] + ": </ul>");
    });

    //  $.ajax({
    //     url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=200&nat=us,',
    //     dataType: 'json',
    //     success: function (data) {
            // $.each(data.results, function (i, order) {
            //     $(document).ready(function () {
            //         var tabs = {
            //             "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
            //             "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
            //             "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
            //             "23": "w", "24": "x", "25": "y", "26": "z"
            //         };
            //         $.each(tabs, function (key, value) {
            //             if (value === order.name.last[0]) {
            //                 $('#' + value).append('<li id="all-' + value + '"' + '>' + order.name.last + ', ' + order.name.first + '</li>');
            //             }
            //         });
            //     });
            // });
        // },
    // });
});

//hiding other elements when tabs are clicked
$(document).ready(function () {
    var tabs = {
        "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
        "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
        "23": "w", "24": "x", "25": "y", "26": "z"
    };

    $.each(tabs, function (key, value) {
        $("#result").append('<li>' + value + '</li>');
    });

    $.each(tabs, function (key, value) {
        $(document).on('click', '#' + key, function () {
            $('#' + value).removeAttr('class', 'hide').siblings().attr('class', 'hide');
            $('#info').addClass('hide')
        })
    });
});

// dynamically creating div="cards" content


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

// alerting the div when button is clicked
$(document).on('click', 'div ul li', function () {
    $('.content').addClass('flexer')
    $('div ul').addClass('half')
    $('#info').removeAttr('class', 'hide')
    $('#info').addClass('cards')
})