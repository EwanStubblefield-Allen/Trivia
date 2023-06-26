import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"
import { Pop } from "../utils/Pop.js"
import { comicsApi, gamesApi } from "./AxiosService.js"

class TriviaService {
  drawColors() {
    for (let i = 0; i < 4; i++) {
      let optionText = document.getElementById(`option${i}`)
      let option = optionText.innerText.split('').splice(3).join('')
      if (option == AppState.selectedQuestion.correct) {
        optionText.classList.add('correct')
        console.log('correct', option)
      } else {
        optionText.classList.add('incorrect')
        console.log('incorrect', option)
      }
    }
  }

  async getTrivia() {
    const response = await comicsApi.get()
    const newResponse = await gamesApi.get()
    const trivia = response.data.results.concat(newResponse.data.results)
    AppState.trivia = trivia.map(r => new Trivia(r))
  }

  checkAnswer(answer) {
    let question = AppState.selectedQuestion
    if (answer == question.correct) {
      Pop.success('You got the question correct!')
      AppState.correct++
    } else {
      Pop.error('You got the question wrong!')
    }
  }
}

export const triviaService = new TriviaService()