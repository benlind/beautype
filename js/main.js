$(document).ready(function() {

    $('#change-theme').click(function(e) {
        if ($('body').hasClass('theme-dark')) {
            $('body').removeClass('theme-dark').addClass('theme-light');
        }
        else {
            $('body').removeClass('theme-light').addClass('theme-dark');
        }
    });

});
