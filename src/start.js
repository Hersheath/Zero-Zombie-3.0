// Function to start the game based on the selected mode
function startGame(mode) {
  const url = `game.html?selectedMode=${encodeURIComponent(mode)}`;
  window.location.href = url;
}

const easyModeButton = document.getElementById("map1");
const hardModeButton = document.getElementById("map2");

// Add event listeners to the buttons to set the selected mode and start the game
if (easyModeButton && hardModeButton) {
  easyModeButton.addEventListener("click", function () {
    let selectedMode = "easy";
    startGame(selectedMode);
  });

  hardModeButton.addEventListener("click", function () {
    let selectedMode = "hard";
    startGame(selectedMode);
  });
} else {
  console.error("Button not found!");
}
