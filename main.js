document.getElementById('startBtn').addEventListener('click', function() {
  const gameStatus = document.getElementById('gameStatus');
  
  // Simulate game start with a message change
  gameStatus.textContent = "The game is starting... Good luck!";
  
  // After a few seconds, update the status to make it dynamic
  setTimeout(() => {
      gameStatus.textContent = "The game is in progress! Stay alert!";
  }, 3000); // 3 seconds delay

  setTimeout(() => {
      gameStatus.textContent = "Game Over! You survived or failed...";
  }, 6000); // 6 seconds delay
});
