$(document).ready(function() {

    var editor = $('textarea');
    var isDirty = false;  // has the textbox been modified?

    handleDirt();

    $('#change-theme').click(function(e) {
        if ($('body').hasClass('theme-dark')) {
            $('body').removeClass('theme-dark').addClass('theme-light');
        }
        else {
            $('body').removeClass('theme-light').addClass('theme-dark');
        }
    });

    // Show a "really close?" message before exit
    function handleDirt() {
        editor.on('input', function() { isDirty = true });

        window.onbeforeunload = function() {
            if (isDirty) return 'Close without saving?';
        };
    }

});
