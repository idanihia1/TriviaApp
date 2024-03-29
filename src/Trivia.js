import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import useTriviaStore from "./useTriviaStore";
import ResultScreen from './ResultScreen';

function mixedAnswers(array) {
  for (let index = array.length - 2; index < array.length; index++) {
    const j = Math.floor(Math.random() * (index + 1));
    [array[index], array[j], array[index]] = [array[j], array[index], array[index]];
  }
  return array;
}

const Trivia = () => {
  const {
    score,
    questionIndex,
    finalScore,
    answers,
    incrementScore,
    setAnswers,
    nextQuestion,
    gameOver,
    setGameOverAndScore,
    restartGame
  } = useTriviaStore();

  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=20&category=18')
      .then(response => {
        setQuestions(response.data.results)
      })
  }, []);

  useEffect(() => {
    if (questionIndex < questions?.length) {
      const currentQuestion = questions[questionIndex]
      const answers = mixedAnswers([currentQuestion?.correct_answer, ...currentQuestion?.incorrect_answers]);
      setAnswers(answers);
    }
  }, [questionIndex, questions, setAnswers])

  const handleAnswer = (answer) => {
    if (questions[questionIndex]?.correct_answer === answer) {
      incrementScore();
    }
    if (questionIndex === questions.length - 1) {
      setGameOverAndScore(true, score);
    } else {
      nextQuestion();
      setTimer(30);
    }
  }


  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(timerId);
        nextQuestion();
        setTimer(30);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer, nextQuestion])

  return (
    <View>
      {gameOver ? (
        <ResultScreen
          totalQuestions={questions?.length}
          finalScore={finalScore}
          onReload={restartGame} />
      ) : (
        <>
          <Text style={styles.question_style}>{questions[questionIndex]?.question}</Text>
          {answers.map((answer, index) => (
            <Button key={index} title={answer} onPress={() => handleAnswer(answer)} />))}
          <Text style={styles.question_style}>Time Left: {timer}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  question_style: { fontSize: 32, color: '#ffffff' }
})

export default Trivia;
