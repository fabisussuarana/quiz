import { createContext, useReducer } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions
}

// em que estado o jogo tá e uma ação que pode mudar esse estado
const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type){
        case "CHANCE_STATE":
            return{
                ...state,
                gameStage: STAGES[1]
            };
        default:
            return state;
    }
}

// - exportando para que seja usado por outros componentes
// - o que vai consumir
// - contexto sendo criado
export const QuizContext = createContext();

// o que vai prover
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider> 
}