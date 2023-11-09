document.addEventListener('DOMContentLoaded', function () {

    const hints = {
      "bed.html": "Sometimes, it's best not to look under the bed.",
        "broom.html": "Exploring mysterious portals may lead to unexpected places.",
       "choose-painting.html": "The key to survival in the painted world is finding the hidden door.",
       "closet.html": "The closet may seem scary, but it holds the key to your escape. Explore it to find a hidden portal.",
       "eat.html": "Don't be too hasty with your choices, inspect your food carefully. Not everything that looks tasty is safe to eat.",
      "end1.html": "You notice a message written in blood on the wall: 'The kitchen is the key to survival.'",
      "end2.html": "As you explore the hallway, look for a hidden passage on the left wall.",
      "hallway.html": "Check the walls for hidden messages that can reveal the way out.",
      "hallway2.html": "You hear faint whispers in the distance, guiding you towards a hidden passage.",
      "index.html": "Beware the creaky stairs, they may lead to an unexpected end.",
         "kitchen.html": "There's a secret passage behind the cabinet.",
         "leave.html": "The safest way might not be the most exciting.",
         "library.html": "In the library, seek the ancient book that glows with forgotten knowledge.",
         "lroom.html": "You notice a strange symbol on the back of the remote control. It might be important.",
         "mirror.html": "When you gaze into the mirror, make sure you look for any subtle movements. Your life may depend on it!",
         "newspaper.html": "The newspaper reveals a hidden message in the crossword puzzle that might help you in the future.",
         "painting.html": "The paintings on the wall may hold a secret. Explore them to reveal hidden paths.",
         "refuse.html": "The old woman's stew contained a secret ingredient. It was a powerful potion that would have granted you extraordinary abilities. Choosing to eat it would have led to a different outcome.",
         "run-away.html": "In your haste to escape, you might have missed a hidden passage nearby. Look around carefully.",
         "staircase.html": "Beware of what's hidden in the shadows.",
         "TDeath.html": "A cold shiver runs down your spine as you enter the dark library. Be cautious when exploring the secrets of the past.",
         "TDesire.html": "You notice a faint, glowing symbol on the cover of the Tome of Desire. It seems to pulse with a mysterious energy. Could this symbol be a key to unlocking its secrets?",
         "turn-back.html": "To escape this room, try looking behind you.",
         "TV.html": "Click the remote control to change the channel and find a way out.",
         "window.html": "You notice a toolbox on the floor. It might come in handy.",
    };

    
    const currentPage = window.location.pathname.split('/').pop();

    
    const clueButton = document.getElementById('clue-button');
    const storySection = document.querySelector('.story');

   
    clueButton.addEventListener('click', function () {
        if (hints[currentPage]) {
           
            storySection.innerHTML += `<p class="hint">${hints[currentPage]}</p>`;
           
            clueButton.disabled = true;
        }
    });
});

function restartAdventure() {
  window.location.href = "index.html";
}
const currentPage = window.location.pathname.split("/").pop();
const restartButton = document.getElementById("restart-button");
if (restartButton) {
  restartButton.addEventListener("click", restartAdventure);
}
