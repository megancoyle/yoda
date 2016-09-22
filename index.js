var translateField  = document.getElementById("translate");
var translation = document.getElementById("yoda");
var yodaForm = document.getElementById("yoda-text");

var timer = null;

// translateField.onkeydown = function(){
  // after three seconds, initiate awkward silence
  timer = setTimeout(function(){
    translation.innerHTML = "...";
  }, 3000);
// }

yodaForm.onsubmit = function(e){
  e.preventDefault();
    // clear timeout
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    translation.innerHTML = "Yoda is searching for answers...";
    var userInput = document.getElementById("translate").value;
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
      success: function(response) {
        translation.innerHTML = response;
      },
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      error: function(){
        translation.innerHTML = translation.innerHTML + "Sorry, but Yoda is out for the day.";
      },
      timeout: 6000
    });
    translateField.value = " "
}
