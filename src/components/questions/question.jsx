import React from 'react'

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div>question</div>
  )
}

export default question