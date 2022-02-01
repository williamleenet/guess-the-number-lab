
const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 3,
  secretNum: null,
  prevGuesses: [],
  guessInput: 0,
  render: function () {
    let guessesCount = this.prevGuesses.length;
    if (this.prevGuesses[guessesCount - 1] === this.secretNum) {
      alert(`Congrats! You guessed the number in ${guessesCount} !`);
    } else {
      if (this.prevGuesses[guessesCount - 1] > this.secretNum) {
        alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join()}`);
      } else {
        if (this.prevGuesses[guessesCount - 1] < this.secretNum) {
          alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join()}`);
        }
      }
    }
  },
  getGuesses: function () {
    //let guessInput = 0; //initialized guess Input
    guessInput = parseInt( //executed the prompts for player's input
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    );
    //if the guess isnt a number or outside the range, then keep calling getGuesses, keep going until player gets the #
    while (isNaN(guessInput) || guessInput < this.smallest || guessInput > this.biggestNum) {
      // keep executing the prompts for player's input until the number does not meet the while loop condition, then exit the loop
      guessInput = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      );
    } return guessInput;
    //return the input from user when exit the loop
  },
  play: function () {
    //generate random secret number
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    //while loop condition to check if the getGuesses has return the number that match secretNum ,if not then continue calling getGuesses and put the array
    while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) { //while guess is not = secret #
      this.prevGuesses.push(this.getGuesses());
      this.render();
    }
    //call render
    this.render();
    return
  }
}
game.play();

