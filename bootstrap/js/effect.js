/**
 * Created by akshay on 2/7/16.
 */



$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 5) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "midnightblue"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});



