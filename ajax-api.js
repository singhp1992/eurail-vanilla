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



// $(document).on('click', "#2", function () {
//     //$('#all-a').hide();
//     var $a = $('#a')
//     $.ajax({
//         url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=1000&nat=us,dk,fr,gb',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data.results)

//             $.each(data.results, function (i, order) {
//                 console.log(order.name.last[0])
//                 if ('b' === order.name.last[0]) {
//                     console.log('working!')
//                     $($a).append('<li class="more-info">' + order.name.last + ', ' + order.name.first + '</li>');
//                 }
//                 else {
//                     console.log('try again')
//                     // $($a).hide('<li class="more-info">' + order.name.last + ', ' + order.name.first + '</li>');
//                 }
//             });

//             // $(document).on('click', '.more-info', data.results, function (i, order) {
//             //     console.log(order.name.last);
//             // })
//         },
//     });
// }); 
// $(document).on('click', "#3", function () {
//     var $a = $('#a')
//     $.ajax({
//         url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=1000&nat=us,dk,fr,gb',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data.results)

//             $.each(data.results, function (i, order) {
//                 console.log(order.name.last[0])
//                 if ('c' === order.name.last[0]) {
//                     console.log('working!')
//                     $($a).append('<li class="more-info">' + order.name.last + ', ' + order.name.first + '</li>');
//                 }
//                 else {
//                     console.log('try again')
//                     // $($a).hide('<li class="more-info">' + order.name.last + ', ' + order.name.first + '</li>');
//                 }
//             });

//             // $(document).on('click', '.more-info', data.results, function (i, order) {
//             //     console.log(order.name.last);
//             // })
//         },
//     });
// }); 

