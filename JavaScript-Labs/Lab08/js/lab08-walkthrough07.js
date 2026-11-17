/* Lab 08 - Exercise 8.7: Arrays, Conditionals, and Loops */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

for (var d = 1; d <= 30; d++) {
    if ((d - 1) % 7 === 0) {
        document.write("<tr>");
    }
    document.write("<td>" + d + "</td>");
    if (d % 7 === 0) {
        document.write("</tr>");
    }
}
if (30 % 7 !== 0) {
    document.write("</tr>");
}
document.write("</table>");
