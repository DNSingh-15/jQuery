// website animation --- effects
$("button").on("click", function () {
    // $("h1").hide();
    // $("h1").toggle();          // click on button h1 be hide and again click botton h1 will be show
    // $("h1").fadeOut(); 
    // $("h1").fadeToggle(); 
    // $("h1").slideUp(); 
    // $("h1").slideUp().slideDown();

    // $("h1").animate({opacity: 0.3}); 
    // $("h1").animate({margin: "15%"}); 

    // $("h1").slideUp().slideDown().animate({ opacity: 0.3 });

})


$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});