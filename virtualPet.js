$(function() {

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
        name: "Starbuck",
        weight: 75,
        happiness: 95
    }
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);




    function clickedTreatButton() {
        pet_info.happiness += 1;
        pet_info.weight += 1;
        checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
        pet_info.happiness += 1;
        pet_info.weight -= 1;
        checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
        pet_info.happiness -= 1;
        pet_info.weight -= 1;
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
        if(weight === 0){
            var weight = 0;
        }
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
        $('.name').text(pet_info.name);
        $('.weight').text(pet_info.weight);
        $('.happiness').text(pet_info.happiness);
    }
})