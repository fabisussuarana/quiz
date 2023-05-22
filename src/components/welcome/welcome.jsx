import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import Quiz from '../../img/quiz.svg';

import './Welcome.css';

const welcome = () => {
  /* - useContext serve para conseguir usar o contexto 
     - usando o contexto QuizContext que foi importado
     - quizState pega os valores
     - dispatch altera os valores */
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar!</p>

        <button onClick={ () => dispatch({ type: "CHANGE_STATE" }) }>Iniciar</button> 

        <img src={Quiz}/>
    </div>
  )
}

export default welcome