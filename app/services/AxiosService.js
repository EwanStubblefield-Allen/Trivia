export const comicsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=50&category=29&type=multiple',
  timeout: 8000
})

export const gamesApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=50&category=15&type=multiple',
  timeout: 8000
})