var translateField  = document.getElementById("translate");
var translation = document.getElementById("yoda");

translateField.onkeypress = function(e){
  // when user presses enter
  if (e.keyCode == 13) {
    var userInput = document.getElementById("translate").value;
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
      success: function(response) {
        translation.innerHTML = translation.innerHTML + response;
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
