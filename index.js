for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);


    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});
function makeSound(key) {
    if (key == 'w') {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if (key == 'a') {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    if (key == 's') {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (key == 'd') {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if (key == 'j') {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if (key == 'k') {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if (key == 'l') {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}