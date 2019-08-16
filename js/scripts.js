$(document).ready(function(event) {
  $(".submit").click(function() {

    var ruby = 0;
    var csharp = 0;
    var javascript = 0;
    var go = 0;
    var python = 0;
    var swift = 0;

    // Animal question
    var q1val = $(#q1-ui).val();
    // Color question
    var q2val = $(#q2-ui).val();

    var q3val = $(#q3-ui).val();
    var q4val = $(#q4-ui).val();
    var q5val = $(#q5-ui).val();


    event.preventDefault();
  });
});



// var weapon = $("#q1").val();
// var terrain = $("#q2").val();
// var style = $("#q3").val();
//
// $("#q1r").text(weapon);
// $("#q2r").text(terrain);
// $("#q3r").text(style);
// $("#concat").text(weapon+terrain+style);
