new Vue({
  el: '#app',
  data: {
    colors: ['red', 'blue', 'yellow', 'green'],
    sequence: [],
    userSequence: [],
    gameStarted: false,
    message: '',
    miniGameButtons: Array(7).fill('white'), // 7 white squares representing the sequence
    sequenceTimer: null,
    gameTimer: null, // Timer to end the game if sequence isn't completed in time
  },
  methods: {
    resetGame() {
      clearTimeout(this.sequenceTimer);
      clearTimeout(this.gameTimer); // Clear game timer
      this.sequence = [];
      this.userSequence = [];
      this.gameStarted = false;
      this.message = '';
      this.miniGameButtons.fill('white');
      // Remove all 'pop' effects
      document.querySelectorAll('.game-button').forEach(button => {
        button.classList.remove('pop');
      });
    },
    startGame() {
      clearTimeout(this.sequenceTimer); // Clear any pending sequence display timeouts
      this.resetGame();
      this.gameStarted = true;
      this.sequence = this.generateRandomSequence(7);
      this.miniGameButtons = [...this.sequence];
      this.sequenceTimer = setTimeout(() => {
        this.miniGameButtons.fill('white');
      }, 5000);
      this.gameTimer = setTimeout(() => { // Start game timer
        if (this.gameStarted) {
          this.message = 'You lost!';
          this.gameStarted = false;
          this.sequenceTimer = setTimeout(this.resetGame, 2000); // Reset game after 2 seconds
        }
      }, 6000); // End game if sequence isn't completed within 6 seconds
    },
    generateRandomSequence(length) {
      const sequence = [];
      for (let i = 0; i < length; i++) {
        sequence.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
      }
      return sequence;
    },
    clickColor(color) {
      if (!this.gameStarted || this.message) return;

      const expectedColor = this.sequence[this.userSequence.length];
      if (color === expectedColor) {
        clearTimeout(this.gameTimer); // Clear game timer
        this.userSequence.push(color);
        this.animateButton(color);
        this.$set(this.miniGameButtons, this.userSequence.length - 1, 'white');
        if (this.userSequence.length === this.sequence.length) {
          this.message = 'You won!';
          this.gameStarted = false;
          this.sequenceTimer = setTimeout(this.resetGame, 2000);
        }
      } else {
        this.message = 'You lost!';
        this.gameStarted = false;
        this.sequenceTimer = setTimeout(this.resetGame, 2000);
      }
    },
    animateButton(color) {
      // Find the button that was clicked and add a 'pop' effect
      const button = document.querySelector(`.game-button[style*="background-color: ${color}"]`);
      button.classList.add('pop');
      // Remove the 'pop' effect after it finishes
      setTimeout(() => {
        button.classList.remove('pop');
      }, 500); // Match this timeout to the duration of the pop effect in your CSS
    }
  }
});