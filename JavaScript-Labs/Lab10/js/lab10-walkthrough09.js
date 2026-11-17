/* Lab 10 - Exercise 10.9: GET Requests */
$(function () {
    $("#consume").click(function () {
        var url = location.protocol === "https:"
            ? "https://www.randyconnolly.com/funwebdev/services/travel/cities.php"
            : "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $("#results").html("<ul></ul>");

        function renderCities(data) {
            $.each(data, function (index, value) {
                var li = $('<li/>').html(value.name);
                li.appendTo("div#results ul");
            });
        }

        $.get(url, function (data, status) {
            if (status == "success") {
                renderCities(data);
            }
        }).fail(function () {
            $.getJSON("js/cities.json", function (data) {
                renderCities(data);
            });
        });
    });
});
