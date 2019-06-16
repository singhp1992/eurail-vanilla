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
// $(document).on('click', "nav li.active", function() {

$(window).load(function () {
    var $a = $('#a')
    $.ajax({
        url: 'https://randomuser.me/api/?results=8',
        dataType: 'json',
        success: function (data) {
            // $($a).append('<li>' + data.results[0].name.first + ', ' + data.results[0].name.last + '</li>');
            // console.log(data)
            console.log(data.results)

            $.each(data.results, function (i, order) {
                $($a).append('<li> testing </li>');
            });
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