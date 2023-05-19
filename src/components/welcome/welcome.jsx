import Quiz from '../../img/quiz.svg';

import './welcome.css';

const welcome = () => {
  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar!</p>

        <button>Iniciar</button>

        <img src={Quiz}/>
    </div>
  )
}

export default welcome