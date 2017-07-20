//define functions here

function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
};

function frameIt(){
  // debugger
  console.log(this)
  $('img').on("load", function(){
    this.className = "tasty";
  })
}

function pressIt(){
  $('#typing').on("keydown", function(key){
    if (key.which == 71){
      alert('G has been pressed.')
    }
  })
}

function submitIt(){
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  getIt();

  frameIt();

  pressIt();

  submitIt();
});
