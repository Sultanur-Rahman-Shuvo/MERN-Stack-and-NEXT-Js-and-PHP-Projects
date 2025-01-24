import React, { useState } from 'react'
import QuestionList from './QuestionList'

const Quiz = () => {
    const questions = [
        {
            "question": "What is the capital of France?",
            "options": ["Berlin", "Madrid", "Paris", "Rome"],
            "answer": "Paris"
        },
        {
            "question": "Which programming language is used for web development?",
            "options": ["Python", "Java", "HTML", "C++"],
            "answer": "HTML"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "answer": "Leonardo da Vinci"
        },
        {
            "question": "What is the largest planet in our solar system?",
            "options": ["Earth", "Mars", "Jupiter", "Saturn"],
            "answer": "Jupiter"
        },
        {
            "question": "What is the boiling point of water at sea level?",
            "options": ["90°C", "100°C", "120°C", "150°C"],
            "answer": "100°C"
        },
        {
            "question": "What is the currency of Japan?",
            "options": ["Dollar", "Euro", "Yen", "Won"],
            "answer": "Yen"
        },
        {
            "question": "Which element has the chemical symbol 'O'?",
            "options": ["Oxygen", "Gold", "Silver", "Hydrogen"],
            "answer": "Oxygen"
        },
        {
            "question": "What is the smallest continent by land area?",
            "options": ["Europe", "Australia", "Antarctica", "South America"],
            "answer": "Australia"
        },
        {
            "question": "Who is the author of 'Harry Potter'?",
            "options": ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Suzanne Collins"],
            "answer": "J.K. Rowling"
        },
        {
            "question": "Which gas do plants absorb during photosynthesis?",
            "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            "answer": "Carbon Dioxide"
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const handleClick = (option) => {
        setCurrentAnswer(option)
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }
    }
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setCurrentAnswer(null)
    }
    return (
        <div>
            {currentQuestionIndex < questions.length ? <div>
                <QuestionList question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
                <button disabled={currentAnswer === null} className={currentAnswer === null ? "button-disable" : "button"} onClick={handleNextQuestion}>Next Question</button>
            </div> : <div>Your Score is {score}</div>}

        </div>
    )
}

export default Quiz
