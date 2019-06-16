// $(document).ready(function () {
//     $('li').click(function () {
//         $(this).addClass("active");
//         $("button").removeClass("active");
//         var randomAPI = "https://api.randomuser.me/";
//         var letter = $(this).text();
//         var randomUserOptions = {
//             tags: letter,
//             format: "json"
//         };
//         function displayNames(data) {
//             var letterHTML = '<ul>';
//             $.each(data.items, function (i, photo) {
//                 letterHTML += '<li id="a">';
//                 letterHTML += name.first + ' ' + name.last;
//             });
//             letterHTML += '</ul>'
//             $('.content').append(letterHTML);
//             console.log(data)
//         }
//         $.getJSON(randomAPI, randomUserOptions, displayNames);
//     });


// }); 
// $(document).on('click', "nav li.active", function () {
//$(document).on('click', "#1", function () {

$(window).load(function () {
    var $a = $('#a')
    $.ajax({
        url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=1000&nat=us,dk,fr,gb',
        dataType: 'json',
        success: function (data) {
            console.log(data.results)

            $.each(data.results, function (i, order) {
                console.log(order.name.last[0])
                if ('a' === order.name.last[0]) {
                    console.log('working!')
                    $($a).append('<li id="all-a" class="hide">' + order.name.last + ', ' + order.name.first +'</li>').show('');
                }
                else if ('b' === order.name.last[0]) {
                    $($a).append('<li id="all-b" class="hide">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('c' === order.name.last[0]) {
                    $($a).append('<li id="all-c" class="hide">' + order.name.last + ', ' + order.name.first + '</li>');
                }
                else if ('d' === order.name.last[0]) {
                    $($a).append('<li id="all-d" class="hide">' + order.name.last + ', ' + order.name.first + '</li>');
                }
            });

            // $(document).on('click', '.more-info', data.results, function (i, order) {
            //     console.log(order.name.last);
            // })
        },
    });
}); 

$(document).on('click', '#1', function () {
    $('#all-a').removeAttr('class', 'hide');
})

$(document).on('click', '#2', function () {
    $('#all-b').removeAttr('class', 'hide').siblings().attr('class', 'hide');
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

