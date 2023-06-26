import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTrivia() {
  AppState.selectedQuestion = AppState.trivia[Math.floor(Math.random() * AppState.trivia.length)]
  setHTML('questions', AppState.selectedQuestion.QuestionsTemplate)
  setText('correct', AppState.correct)
  console.log('current question', AppState.selectedQuestion)
}

function _addColors() {
  triviaService.drawColors()
}

function _removeColors() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`option${i}`).classList.remove('correct')
    document.getElementById(`option${i}`).classList.remove('incorrect')
  }
  _drawTrivia()
}

export class TriviaController {
  constructor() {
    console.log('Trivia Controller Loaded');
    this.getTrivia()
    AppState.on('trivia', _drawTrivia)
  }

  async getTrivia() {
    try {
      await triviaService.getTrivia()
      Pop.success('Trivia Loaded')
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async checkAnswer(answer) {
    let isFinalAnswer = await Pop.confirm('Is this your final answer?')
    if (!isFinalAnswer) {
      return
    }
    _addColors()
    triviaService.checkAnswer(answer)
    setTimeout(_removeColors, 2000)
  }
}