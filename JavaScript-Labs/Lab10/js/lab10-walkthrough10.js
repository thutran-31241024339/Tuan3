/* Lab 10 - Exercise 10.10: jqXHR Handling */
$(function () {
    $('.animLoading').hide();

    $("#consume").click(function () {
        $('.animLoading').show();
        $("div#results ul").empty();

        var url = location.protocol === "https:"
            ? "https://www.randyconnolly.com/funwebdev/services/travel/cities.php"
            : "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        function renderCities(data) {
            $.each(data, function (index, value) {
                var li = $('<li/>').html(value.name);
                li.appendTo("div#results ul");
            });
        }

        $.get(url)
            // done will happen first
            .done(function (data) {
                renderCities(data);
            })
            // if error occurs will execute, fallback to local cities.json on HTTPS/Mixed Content issues
            .fail(function (xhr, status, error) {
                $.getJSON("js/cities.json")
                    .done(function (fallbackData) {
                        renderCities(fallbackData);
                    })
                    .fail(function () {
                        alert("failed loading data - status=" + status + " error=" + error);
                    })
                    .always(function () {
                        $('.animLoading').fadeOut("slow");
                    });
            })
            // always should be last
            .always(function () {
                $('.animLoading').fadeOut("slow");
            });
    });
});
