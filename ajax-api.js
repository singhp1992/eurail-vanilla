// $(document).on('click', "nav li.active", function () {
//$(document).on('click', "#1", function () {

$(window).load(function () {
    $.ajax({
        url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=200&nat=us,dk,fr,gb',
        dataType: 'json',
        success: function (data) {
            $.each(data.results, function (i, order) {
                if ('a' === order.name.last[0]) {
                    $('#a').append('<li id="all-a">' + order.name.last + ', ' + order.name.first +'</li>');
                }
                else if ('b' === order.name.last[0]) {
                    $('#b').append('<li id="all-b">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('c' === order.name.last[0]) {
                    $('#c').append('<li id="all-c">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('d' === order.name.last[0]) {
                    $('#d').append('<li id="all-d">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('e' === order.name.last[0]) {
                    $('#e').append('<li id="all-e">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('f' === order.name.last[0]) {
                    $('#f').append('<li id="all-f">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('g' === order.name.last[0]) {
                    $('#g').append('<li id="all-g">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('h' === order.name.last[0]) {
                    $('#h').append('<li id="all-h">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('i' === order.name.last[0]) {
                    $('#i').append('<li id="all-i">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('j' === order.name.last[0]) {
                    $('#j').append('<li id="all-j">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('k' === order.name.last[0]) {
                    $('#k').append('<li id="all-k">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('l' === order.name.last[0]) {
                    $('#l').append('<li id="all-l">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('m' === order.name.last[0]) {
                    $('#m').append('<li id="all-m">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('n' === order.name.last[0]) {
                    $('#n').append('<li id="all-n">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('o' === order.name.last[0]) {
                    $('#o').append('<li id="all-o">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('p' === order.name.last[0]) {
                    $('#p').append('<li id="all-p">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('q' === order.name.last[0]) {
                    $('#q').append('<li id="all-q">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('r' === order.name.last[0]) {
                    $('#r').append('<li id="all-r">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('s' === order.name.last[0]) {
                    $('#s').append('<li id="all-s">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('t' === order.name.last[0]) {
                    $('#t').append('<li id="all-t">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('u' === order.name.last[0]) {
                    $('#u').append('<li id="all-u">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('v' === order.name.last[0]) {
                    $('#v').append('<li id="all-v">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('w' === order.name.last[0]) {
                    $('#w').append('<li id="all-w">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('x' === order.name.last[0]) {
                    $('#x').append('<li id="all-x">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('y' === order.name.last[0]) {
                    $('#y').append('<li id="all-y">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else {
                    $('#z').append('<li id="all-z">' + order.name.last + ', ' + order.name.first + '</li>');
                }
            });
        },
    });
}); 

//hiding other elements when tabs are clicked
$(document).on('click', '#1', function () {
    $('#a').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#2', function () {
    $('#b').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#3', function () {
    $('#c').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#4', function () {
    $('#d').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#5', function () {
    $('#e').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#6', function () {
    $('#f').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#7', function () {
    $('#g').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#8', function () {
    $('#h').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#9', function () {
    $('#i').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#10', function () {
    $('#j').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#11', function () {
    $('#k').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#12', function () {
    $('#l').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#13', function () {
    $('#m').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#14', function () {
    $('#n').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#15', function () {
    $('#o').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#16', function () {
    $('#p').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#17', function () {
    $('#q').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#18', function () {
    $('#r').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#19', function () {
    $('#s').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#20', function () {
    $('#t').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#21', function () {
    $('#u').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#22', function () {
    $('#v').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#23', function () {
    $('#w').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#24', function () {
    $('#x').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#25', function () {
    $('#y').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})
$(document).on('click', '#26', function () {
    $('#z').removeAttr('class', 'hide').siblings().attr('class', 'hide');
})



