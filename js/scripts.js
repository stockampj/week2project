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
