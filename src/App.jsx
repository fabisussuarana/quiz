import Welcome from './components/welcome/welcome'
import Question from './components/questions/question'

import { QuizContext } from './context/quiz';
import { useContext } from 'react';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='app'>
      <h1>Quiz de programação</h1>
      { quizState.gameStage === "Start" && <Welcome/> }
      { quizState.gameStage === "Playing" && <Question/> }
      { quizState.gameStage === "End" && <End/> }
    </div>
  )
}

export default App
