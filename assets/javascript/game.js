// JS For Game Logic

// Global Variable declarations
var targetNumber = counter = wins = losses = 0;
var numberOptions = [0, 0, 0, 0];
var crystalHolders = [ "#crystal-0", "#crystal-1", "#crystal-2", "#crystal-3" ];
var imageArr = [ "assets/images/placeholder.png", "assets/images/placeholder.png", "assets/images/placeholder.png", "assets/images/placeholder.png" ];

    

// Global Function Definitions
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

function initialize() {
    // initialize variables
    counter = 0;
    targetNumber = getRndInt(19, 120);
    for (var i = 0; i < numberOptions.length; i++) {
        numberOptions[i] = getRndInt(1, 12);
        // Debugging
        console.log(numberOptions[i]);
    }

    // clear out all of the crystals element
    for (var i = 0; i < crystalHolders.length; i++) {
        $(crystalHolders[i]).empty();
    }

    // insert curent values into relevant elements
    $("#target-number").text(targetNumber);
    $("#current-number").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
    // create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", imageArr[i]);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $(crystalHolders[i]).append(imageCrystal);

        // Debugging
        // console.log($(imageCrystal).attr("src"));
        console.log($(imageCrystal).attr("data-crystalvalue"));
        console.log($(this).attr("data-crystalValue"));
    }
};

$.when( $.ready ).then(function() {
    // initialize the page before our game can start
    initialize();
});

// start of our actual game logic
$(document).on("click", ".crystal-image", function() {
    console.log("clicked");
    console.log(this);
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-number").text(counter);
    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        initialize();
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        initialize();
    };
});