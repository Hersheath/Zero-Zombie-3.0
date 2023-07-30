const scoreForm = document.getElementById("score-form");
if (scoreForm) {
  scoreForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve player name and score from form input
    const playerName = document.getElementById("player-name").value;

    const urlParams = new URLSearchParams(window.location.search);

    const score = urlParams.get("score");
    // Display player name and score
    const playerNameElement = document.createElement("p");
    playerNameElement.textContent = `Player Name: ${playerName}`;
    document.body.appendChild(playerNameElement);

    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Score: ${score}`;
    document.body.appendChild(scoreElement);

    // Retrieve scores from localStorage
    let scores = localStorage.getItem("scores");
    if (scores) {
      scores = JSON.parse(scores);

      // Add new score and name to scores array
      scores.push({ name: playerName, score: parseInt(score, 10) });

      // Sort scores by descending order
      scores.sort((a, b) => b.score - a.score);

      // Store updated scores in localStorage
      localStorage.setItem("scores", JSON.stringify(scores));

      const scoreList = document.getElementById("score-list");

      // Clear existing score list items
      scoreList.innerHTML = "";

      // Display scores in the score list
      scores.forEach((playerScore, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${playerScore.name}: ${
          playerScore.score
        }`;
        scoreList.appendChild(listItem);
      });
    } else {
      // If scores do not exist in localStorage, create a new scores array
      scores = [{ name: playerName, score: parseInt(score, 10) }];

      // Store scores in localStorage
      localStorage.setItem("scores", JSON.stringify(scores));

      const scoreList = document.getElementById("score-list");

      // Display score in the score list
      const listItem = document.createElement("li");
      listItem.textContent = `1. ${playerName}: ${score}`;
      scoreList.appendChild(listItem);
    }

    // Hide the score form
    scoreForm.style.display = "none";

    // Add a "Back" button to return to the game
    const backButton = document.createElement("a");
    backButton.href = "game.html";
    backButton.textContent = "Back";
    document.body.appendChild(backButton);
  });
}
