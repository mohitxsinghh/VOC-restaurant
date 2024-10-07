// Toggle visibility of ingredients
document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients');
    if (ingredients.classList.contains('hidden')) {
        ingredients.classList.remove('hidden');
        this.textContent = 'Hide Ingredients';
    } else {
        ingredients.classList.add('hidden');
        this.textContent = 'Show Ingredients';
    }
});

// Toggle visibility of instructions
document.getElementById('toggle-instructions').addEventListener('click', function() {
    const instructions = document.getElementById('instructions');
    if (instructions.classList.contains('hidden')) {
        instructions.classList.remove('hidden');
        this.textContent = 'Hide Instructions';
    } else {
        instructions.classList.add('hidden');
        this.textContent = 'Show Instructions';
    }
});

// Start Cooking: highlight the first step
let currentStep = 0;
const steps = document.querySelectorAll('#instructions ol li');
const nextStepButton = document.getElementById('next-step');

document.getElementById('start-cooking').addEventListener('click', function() {
    if (steps.length > 0) {
        // Highlight the first step
        steps[currentStep].classList.add('highlighted');
        this.classList.add('hidden');  // Hide the "Start Cooking" button
        nextStepButton.classList.remove('hidden');  // Show the "Next Step" button
    }
});

// Move to the next step
nextStepButton.addEventListener('click', function() {
    if (currentStep < steps.length - 1) {
        // Remove highlight from the current step
        steps[currentStep].classList.remove('highlighted');
        currentStep += 1;
        // Highlight the next step
        steps[currentStep].classList.add('highlighted');
    } else {
        // If it's the last step, hide the "Next Step" button
        nextStepButton.classList.add('hidden');
    }
});
