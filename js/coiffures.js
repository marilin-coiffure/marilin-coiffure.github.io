$('document').ready(function(){

    var i;
    for (i = 1; i <= 3; i++) {

        var cl;
        if (i % 4 == 0) {
            cl = ' class="last"';
        } else {
            cl = "";
        }
        $("#coiffures").append('<li  ' + cl + '><a href="img/coiffures/img-' + i + '.jpg" class="magnifier"><img src="img/coiffures/thumb_img-' + i + '.jpg" alt=""></a></li>');
    }

});