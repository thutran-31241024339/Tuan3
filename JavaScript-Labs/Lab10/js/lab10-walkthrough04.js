/* Lab 10 - Exercise 10.4: jQuery Listeners */
$(function () {
    // chaining handlers
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });
});
