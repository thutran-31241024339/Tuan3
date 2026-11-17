/* Helper functions for Lab 08 exercise.html using js/travel-data.js */

function outputContinentList() {
    document.write('<ul class="list-group">');
    for (var i = 0; i < continents.length; i++) {
        document.write('<li class="list-group-item"><a href="#">' + continents[i] + '</a></li>');
    }
    document.write('</ul>');
}

function outputCountryList() {
    document.write('<ul class="list-group">');
    for (var i = 0; i < countries.length; i++) {
        if (countries[i] === "Canada") {
            document.write('<li class="list-group-item active">' + countries[i] + '</li>');
        } else {
            document.write('<li class="list-group-item"><a href="#">' + countries[i] + '</a></li>');
        }
    }
    document.write('</ul>');
}

function outputPostRow(post) {
    document.write('<div class="row">');
    document.write('  <div class="col-md-2">');
    document.write('    <a href="#post-' + post.id + '"><img src="images/travel/' + post.thumb + '" alt="' + post.title + '" class="img-thumbnail"/></a>');
    document.write('  </div>');
    document.write('  <div class="col-md-10">');
    document.write('    <h2>' + post.title + '</h2>');
    document.write('    <div class="details">Posted by ' + post.user + '<span class="pull-right">' + post.postdate + '</span></div>');
    document.write('    <p class="excerpt">' + post.excerpt + '</p>');
    document.write('    <p><a href="#post-' + post.id + '" class="btn btn-primary btn-sm">Read more</a></p>');
    document.write('  </div>');
    document.write('</div>');
}

function outputPosts() {
    for (var i = 0; i < posts.length; i++) {
        outputPostRow(posts[i]);
        if (i < posts.length - 1) {
            document.write('<hr/>');
        }
    }
}

function outputPagination(activePage, totalPages) {
    document.write('<ul class="pagination">');
    document.write('<li><a href="#">&laquo;</a></li>');
    for (var p = 1; p <= totalPages; p++) {
        if (p === activePage) {
            document.write('<li class="active"><a href="#">' + p + '</a></li>');
        } else {
            document.write('<li><a href="#">' + p + '</a></li>');
        }
    }
    document.write('<li><a href="#">&raquo;</a></li>');
    document.write('</ul>');
}
