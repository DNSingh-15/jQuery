$('h1').text("jQuery")

$('button').text('dont click me')
// in .html it contains only content not the whole text
$('button').html('<em>bye</em>')

$('button').text('<em>bye</em>')


// manipulating the attribute
// getting the attribut
console.log($('img').attr('src'));

// set the attribut
$('a').attr("href","https://www.google.co.in/");


// adding event listener
$("button").click(function () {                            // jQuery select all the button
    $("h1").css("color", "purple")
})


$("input").keypress(function (e) { 
    console.log(e.key);
});

// challenge 1 - change the h1 using keyboard button
$(document).keypress(function (e) { 
    $("h1").text(e.key);
});



// mouseover event -  and all event format same like this
$("h1").on("mouseover", function () {
    $("h1").css("color", "green")
})
