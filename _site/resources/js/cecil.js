$(document).ready(function () {
    $("a.mobilenav").click(function (event) {
        event.preventDefault();
    });
    $("#mobilenav a.mobilenav").click(function () {
        $('ul#mainnav').toggleClass("showmain");
    });
});