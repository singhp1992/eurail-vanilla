//API call when window loads
$(window).load(function () {
    $.ajax({
        url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=300&nat=us,dk,fr,gb,es,nl,nz',
        dataType: 'json',
        success: function (data) {
            $.each(data.results, function (i, order) {
                $(document).ready(function () {
                    var tabs = {
                        "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
                        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n",
                        "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t", "21": "u", "22": "v",
                        "23": "w", "24": "x", "25": "y", "26": "z"
                    };
                    $.each(tabs, function (key, value) {
                        if (value === order.name.last[0]) {
                            $('#' + value).append('<li id="all-"' + value + ">" + order.name.last + ', ' + order.name.first + '</li>');
                        }
                    });
                });
            });
        },
    });
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
        $(document).on('click','#' + key, function () {
            $('#' + value).removeAttr('class', 'hide').siblings().attr('class', 'hide');
        })
    });
});