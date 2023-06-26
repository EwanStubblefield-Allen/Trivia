import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { TriviaController } from "./controllers/TriviaController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { TriviaView } from "./views/TriviaView.js";


export const router = [
  {
    path: '',
    controller: TriviaController,
    view: TriviaView
  }
]