/* Lab 10 - Exercise 10.5: Inserting DOM Elements */
$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="Inserted painting thumbnail">');
    var panel = $('.panel');

    // Các cách chèn phần tử DOM trong Exercise 10.5:
    // panel.after(img);
    // panel.before(img);
    // panel.append(img);
    // panel.prepend(img);
    // img.appendTo(panel);
    // img.prependTo(panel);
    img.insertBefore(panel);
});
