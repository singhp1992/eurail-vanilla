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


// $(document).on('click', "nav li.active", function () {
$(window).load(function () {
    var $a = $('#a')
    $.ajax({
        url: 'https://api.randomuser.me/?inc=gender,name,nat,email&results=100&nat=us,dk,fr,gb',
        dataType: 'json',
        success: function (data) {
            console.log(data.results)

            $.each(data.results, function (i, order) {
                console.log(order.name.last[0])
                if ('b' === order.name.last[0]) {
                    console.log('working!')
                    // $('#a').text(order.name.last[i])
                    $($a).append('<li class="more-info">' + order.name.last + ', ' + order.name.first +'</li>');
                }
                else {
                    console.log('try again')
                    // $('#a').text('Sorry no one')
                }
            });

            // $(document).on('click', '.more-info', data.results, function (i, order) {
            //     console.log(order.name.last);
            // })
        },
    });
}); 

