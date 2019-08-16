$(document).ready(function() {
  $("#submit").click(function(event) {
    var ruby = 0;
    var csharp = 0;
    var javascript = 0;
    var rust = 0;
    var go = 0;
    var python = 0;
    var swift = 0;




    // Animal question
    var q1val = $("#q1-ui").val();
    // Color question
    var q2val = $("#q2-ui").val();
    // Shape question
    var q3val = $("#q3-ui").val();
    // Name length question
    var q4val = $("#q4-ui").val();
    // Motto question
    var q5val = $("#q5-ui").val();

    $(".card").removeClass("show");


    if (q1val === "2") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += 2;
      python += 2;
      swift += 2;
    } else if (q1val === "1") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += 1;
      python += 1;
      swift += 1;
    } else if (q1val === "-1") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += -1;
      python += -1;
      swift += -1;
    } else if (q1val === "-2") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += -2;
      python += -2;
      swift += -2;
    } else {
//    debug message
    }

    if (q2val === "r") {
      ruby += 1.99;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += 0;
      python += 0;
      swift += 0;
    } else if (q2val === "p") {
      ruby += 0;
      csharp += 1.99;
      javascript += 0;
      rust += 0;
      go += 0;
      python += 0;
      swift += 0;
    } else if (q2val === "b") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += 1.99;
      python += .99;
      swift += 0;
    } else if (q2val === "y") {
      ruby += 0;
      csharp += 0;
      javascript += 1.99;
      rust += 0;
      go += 0;
      python += .99;
      swift += 0;
    } else if (q2val === "t") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 1.99;
      go += 0;
      python += 0;
      swift += 0;
    } else {
//    debug message
    }


    if (q3val === "easy") {
      ruby += 0;
      csharp += 1.01;
      javascript += 0;
      rust += 2.01;
      go += 0;
      python += 1.01;
      swift += 0;
    } else if (q3val === "hard") {
      ruby += 1.01;
      csharp += 0;
      javascript += 2.01;
      rust += 0;
      go += 0;
      python += 0;
      swift += 2.01;
    } else {
//    debug message
    }


    if (q4val === "s") {
      ruby += 0;
      csharp += 2.02;
      javascript += -1.02;
      rust += 0;
      go += 2.02;
      python += 0;
      swift += 0;
    } else if (q4val === "m") {
      ruby += 2.02;
      csharp += 0;
      javascript += 0;
      rust += 2.02;
      go += 0;
      python += 2.02;
      swift += 2.02;
    } else if (q4val === "l") {
      ruby += 0;
      csharp += -.98;
      javascript += 1.98;
      rust += 0;
      go += -.98;
      python += 0;
      swift += 0;
    }else {
    //    debug message
    }

    if (q5val === "m1") {
      ruby += .5;
      csharp += .5;
      javascript += .2;
      rust += .2;
      go += 0;
      python += 0;
      swift += 0;
    } else if (q5val === "m2") {
      ruby += 0;
      csharp += 0;
      javascript += .2;
      rust += .5;
      go += .5;
      python += .2;
      swift += 0;
    } else if (q5val === "m3") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += .2;
      go += .2;
      python += .5;
      swift += .5;
    } else {
    //    debug message
    }

    var languages = [ruby, csharp, javascript, rust, go, python, swift];
    // console.log(languages)
    languages.sort(function(a,b){return b-a});
    // console.log(languages)
    


    // if (ruby >= (csharp && javascript && rust && go && python && swift)) {
    //   $("#ruby").addClass("show");
    // } else if (csharp >= (ruby && javascript && rust && go && python && swift)) {
    //   $("#csharp").addClass("show");
    // } else if (javascript >= (ruby && csharp && rust && go && python && swift)) {
    //   $("#javascript").addClass("show");
    // } else if (rust >= (ruby && csharp && javascript && go && python && swift)) {
    //   $("#rust").addClass("show");
    // } else if (go >= (ruby && csharp && javascript && rust && python && swift)) {
    //   $("#go").addClass("show");
    // } else if (python >= (ruby && csharp && javascript && rust && go && swift)) {
    //   $("#python").addClass("show");
    // } else if (swift >= (ruby && csharp && javascript && rust && go && python)) {
    //   $("#swift").addClass("show");
    // }



    console.log(ruby)
    console.log(csharp)
    console.log(javascript)
    console.log(rust)
    console.log(go)
    console.log(python)
    console.log(swift)


    event.preventDefault();
  });
});




// $("#q1r").text(weapon);
// $("#q2r").text(terrain);
// $("#q3r").text(style);
// $("#concat").text(weapon+terrain+style);
