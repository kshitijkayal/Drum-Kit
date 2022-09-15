var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/kick-bass.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/snare.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/crash.mp3");
      audio.play();
      break;


    default:
      console.log("oops");

  }
}

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}







// var audio= new Audio('C:/Users/KSHITIJ KAYAL/Desktop/Drum Kit Challenge/Drum Kit Starting Files/sounds/tom-1.mp3');
// audio.play();
