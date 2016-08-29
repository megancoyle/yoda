var translateField  = document.getElementById("translate");
var translation = document.getElementById("yoda");

var timer = null;
  // after five seconds, initiate awkward silence
timer = setTimeout(function(){
  translation.innerHTML = "...";
}, 5000);

translateField.onkeypress = function(e){

  // when user presses enter
  if (e.keyCode == 13) {
    // clear timeout
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    var userInput = document.getElementById("translate").value;
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
      success: function(response) {
        translation.innerHTML = response;
        console.log(timer)
      },
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      error: function(){
        translation.innerHTML = translation.innerHTML + "Sorry, but Yoda is out for the day.";
      },
      timeout: 6000
    });
  }
}
