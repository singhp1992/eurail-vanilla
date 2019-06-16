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
$('#result').click(function() {
    $.ajax({
        url: 'https://randomuser.me/api/?results=6',
        dataType: 'json',
        success: function (data) {
            $("#a").append('<li>' + data.results[0].name.first + ', ' + data.results[0].name.last + '</li>');
            $("#a").append('<li>' + data.results[1].name.first + ', ' + data.results[1].name.last + '</li>');
            $("#a").append('<li>' + data.results[2].name.first + ', ' + data.results[2].name.last + '</li>');
            $("#a").append('<li>' + data.results[3].name.first + ', ' + data.results[3].name.last + '</li>');
            $("#a").append('<li>' + data.results[4].name.first + ', ' + data.results[4].name.last + '</li>');
            $("#a").append('<li>' + data.results[5].name.first + ', ' + data.results[5].name.last + '</li>');

            console.log(data)
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