/* Lab 09 - Exercise 9.1 (Trạng thái hiển thị #msgArea trước bước ẩn textarea) */
var msg = document.getElementById("msgArea");
document.getElementById("pageTitle").innerHTML = "Even newer title";

msg.value = "My class is " + msg.getAttribute("class");

var counts = document.getElementsByClassName("count-number");
msg.value += "\n--- Count Numbers ---";
for (var i = 0; i < counts.length; i++) {
    msg.value += "\n" + counts[i].innerText;
}

var ps = document.querySelectorAll("#first p");
msg.value += "\n--- #first p ---\n";
for (var j = 0; j < ps.length; j++) {
    msg.value += ps[j].innerText + "\n";
}

document.getElementById("features").style.backgroundColor = "green";
