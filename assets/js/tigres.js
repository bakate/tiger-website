 $(function () {
     $('.carousel-inner').carousel();
     $('[data-toggle="tooltip"]').tooltip();
     $('.btn-group-vertical .btn:nth-child(1)').click(function () {
         $('iframe').attr('src', 'https://www.youtube.com/embed/YZxTzg6ud9I');
     })
     $('.btn-group-vertical .btn:nth-child(2)').click(function () {
         $('iframe').attr('src', 'https://www.youtube.com/embed/whUN0CzX1xA');
     })
     $('.btn-group-vertical .btn:nth-child(3)').click(function () {
         $('iframe').attr('src', 'https://www.youtube.com/embed/gw8uqa4RCBU');
     })
 });
