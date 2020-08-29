$(document).ready(function(){
    $(".navBarIcon").click(function(){
        console.log("this is clicked");
        $("nav").slideToggle(500);
    });
});