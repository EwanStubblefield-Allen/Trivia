let options = []

export class Trivia {
  constructor(data) {
    this.category = data.category
    this.question = data.question
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
    this.difficulty = data.difficulty
  }

  get QuestionsTemplate() {
    this.randomAnswer()
    return `
    <div class="col-12 text-bg-dark trivia-text text-center">
      <p>${this.question}</p>
    </div>
    <section class="row justify-content-between px-5 py-3">
      <div id="option0" onclick="app.TriviaController.checkAnswer('${options[0]}')" class="col-5 text-bg-dark trivia-text trivia-answers">
        <p>
          <span>A:</span>
          ${options[0]}
        </p>
      </div>
      <div id="option1" onclick="app.TriviaController.checkAnswer('${options[1]}')" class="col-5 text-bg-dark trivia-text trivia-answers">
        <p>
          <span>B:</span>
          ${options[1]}
        </p>
        </div>
    </section>
    <section class="row justify-content-between px-5">
      <div id="option2" onclick="app.TriviaController.checkAnswer('${options[2]}')" class="col-5 text-bg-dark trivia-text trivia-answers">
        <p>
          <span>C:</span>
          ${options[2]}
        </p>
      </div>
      <div id="option3" onclick="app.TriviaController.checkAnswer('${options[3]}')" class="col-5 text-bg-dark trivia-text trivia-answers">
        <p>
          <span>D:</span>
          ${options[3]}
        </p>
      </div>
    </section>`
  }

  randomAnswer() {
    options = [this.correct, this.incorrect[0], this.incorrect[1], this.incorrect[2]]
    options.sort(() => Math.random() - 0.5);
  }
}