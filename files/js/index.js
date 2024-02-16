$(document).ready(function() { 
    $(".js-element").hover(
        function() {
            $(this).addClass("hover");
        },
        function() {
            $(this).removeClass("hover");
        }
    );

    $(".hobbies").hover(
        function() {
            $(".hidden-text").addClass("hidden-toggle");
        },
        function() {
            $(".hidden-text").removeClass("hidden-toggle");
        }
    );
})


