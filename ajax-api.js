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

// $(window).load(function () {
$(document).on('click', "nav li.active", function () {
    var $a = $('#a')
    $.ajax({
        url: 'https://randomuser.me/api/?results=8',
        dataType: 'json',
        success: function (data) {
            console.log(data.results)

            $.each(data.results, function (i, order) {
                console.log(order.name.last[0])
                $($a).append('<li class="more-info">' + order.name.last + ', ' + order.name.first +'</li>');
                // if ('b' === order.name.last[0]) {
                //     console.log('working!')
                // }
                // else {
                //     console.log('try again')
                // }
            });

            // $(document).on('click', '.more-info', data.results, function (i, order) {
            //     console.log(order.name.last);
            // })
        },
    });
}); 

//function displayNames(data) {
//             var letterHTML = '<ul>';
//             $.each(data.items, function (i, photo) {
//                 letterHTML += '<li id="a">';
//                 letterHTML += name.first + ' ' + name.last;
//             });
//             letterHTML += '</ul>'
//             $('.content').append(letterHTML);
//             console.log(data)
//         }


var configJson = {
    "title": "Contact List", 
    "uri":"https://api.randomuser.me/",
    "numberCards": 120,
    "tabs": ["A", "B", "c", "d", "e", "f", "g","h",
    "i", "j", "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"]
}

var dataResultsName= { 

}



