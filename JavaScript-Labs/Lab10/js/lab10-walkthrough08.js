/* Lab 10 - Exercise 10.8: Complex Animations */
$(function () {
    $("button").click(function () {
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({
                top: '400px',
                opacity: '0.2'
            })
            .animate({
                height: '200px'
            }, 2000);
    });
});
