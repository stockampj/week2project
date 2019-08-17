$(document).ready(function() {

  $("#survey-row").fadeIn(2000);

  $("#submit").click(function(event) {

    $(".card").removeClass("show");
    $("#survey-row").slideUp(1000);
    $("#results-row").show()


    var ruby = 0;
    var csharp = 0;
    var javascript = 0;
    var rust = 0;
    var go = 0;
    var python = 0;
    var swift = 0;

    var q1val = $("#q1-ui").val();
    var q2val = $("#q2-ui").val();
    var q3val = $("#q3-ui").val();
    var q4val = $("#q4-ui").val();
    var q5val = $("#q5-ui").val();

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
      ruby += 2;
      csharp += 0;
      javascript += 0;
      rust += 0;
      go += 0;
      python += 0;
      swift += 0;
    } else if (q2val === "p") {
      ruby += 0;
      csharp += 2;
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
      go += 2;
      python += 1;
      swift += 0;
    } else if (q2val === "y") {
      ruby += 0;
      csharp += 0;
      javascript += 2;
      rust += 0;
      go += 0;
      python += 1;
      swift += 0;
    } else if (q2val === "t") {
      ruby += 0;
      csharp += 0;
      javascript += 0;
      rust += 2;
      go += 0;
      python += 0;
      swift += 0;
    } else {
//    debug message
    }

    if (q3val === "easy") {
      ruby += 0;
      csharp += 1;
      javascript += 0;
      rust += 2;
      go += 0;
      python += 1;
      swift += 0;
    } else if (q3val === "hard") {
      ruby += 1;
      csharp += 0;
      javascript += 2;
      rust += 0;
      go += 0;
      python += 0;
      swift += 2;
    } else {
//    debug message
    }


    if (q4val === "s") {
      ruby += 0;
      csharp += 2;
      javascript += -1;
      rust += 0;
      go += 2;
      python += 0;
      swift += 0;
    } else if (q4val === "m") {
      ruby += 2;
      csharp += 0;
      javascript += 0;
      rust += 2;
      go += 0;
      python += 2;
      swift += 2;
    } else if (q4val === "l") {
      ruby += 0;
      csharp += -1;
      javascript += 2;
      rust += 0;
      go += -1;
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

//  tie-breaker
    ruby += (Math.random()) * .01;
    csharp += (Math.random()) * .01;
    javascript += (Math.random()) * .01;
    rust += (Math.random()) * .01;
    go += (Math.random()) * .01;
    python += (Math.random()) * .01;
    swift += (Math.random()) * .01;

    var languages = [ruby, csharp, javascript, rust, go, python, swift];
    languages.sort(function(a,b){return b-a});

    var first = languages [0];
    var second = languages [1];
    var third = languages [2];


    if ((ruby === first ) || (ruby === second) || (ruby === third)) {
      $("#ruby").addClass("show");
    }
    if ((csharp === first ) || (csharp === second) || (csharp === third)) {
      $("#csharp").addClass("show");
    }
    if ((javascript === first ) || (javascript === second) || (javascript === third)) {
      $("#javascript").addClass("show");
    }
    if ((go === first ) || (go === second) || (go === third)) {
      $("#go").addClass("show");
    }
    if ((python === first ) || (python === second) || (python === third)) {
      $("#python").addClass("show");
    }
    if ((rust === first ) || (rust === second) || (rust === third)) {
      $("#rust").addClass("show");
    }
    if ((swift === first ) || (swift === second) || (swift === third)) {
      $("#swift").addClass("show");
    }

    event.preventDefault();
  });

  $("#reset").click(function(event) {

    $("#survey-row").slideDown(1000);
    $("#results-row").slideDown(1000).hide();

    event.preventDefault();
  });
});
