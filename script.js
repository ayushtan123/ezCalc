//calculator javascript

const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value.includes("/0") == true) {
        display.value = "Division by Zero not Possible!"
    }
    else {
        try {
            display.value = eval(display.value);
        }
        catch (error) {
            setTimeout(function () {
                display.value = "Error";
            }, 0);

            // Clear the error message after 3 seconds
            setTimeout(function () {
                display.value = "";
            }, 3000);
        }
    }

}

function changeText() {
    document.querySelector(".details h1").innerHTML = "Made with ❤️ by Ayush Tandon";
}

function restoreText() {
    document.querySelector(".details h1").innerHTML = "Calculator using JavaScript";
}

function Sound() {
    var audio = new Audio("click.mp3");
    audio.play();
}

function s2() {   //japanese yoo
    var audio = new Audio("yoo.mp3");
    audio.play();
}
