import React, { useState } from 'react'
import ques from '../Questions/Questions'


const Mainq = () => {

const [currentQuestion,setCurrentQuestion]=useState(0)
const [answered,setAnswered]=useState(false)
const [selectedAnswer,setSelectedAnswer]=useState(null)
const [score,setScore]=useState(0)
const [showscore,SetShowScore]=useState(false)

const handleAnswerOptions=(index,isCorrect)=>{
  setAnswered(true)
  setSelectedAnswer(index)
  if(isCorrect){
    setScore(score + 1)
  }
}

const nextQuestion=()=>{
  setAnswered(false)
  setSelectedAnswer(null)
  const nextQuestion = currentQuestion + 1
  if(nextQuestion < ques.length ){
    setCurrentQuestion(nextQuestion)
  }else{
    SetShowScore(true)
  }
}


  return (
    <>
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className='flex justify-center items-center h-screen '>
        <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
          <h2 className='p-4 border text-center font-bold mb-2 text-xl bg-indigo-800 text-white'>Quiz time</h2>
          {showscore ? <div className='text-center items-center font-extrabold '>
            Final Score is {score} of {ques.length}
          </div> : 
          <div>
            <div>{ques[currentQuestion].questionText}</div>
            <div>{ques[currentQuestion].answerOptions.map((option,index) => (
              <button 
               onClick={() => handleAnswerOptions(index,option.isCorrect)}
              className={`block w-full pb-3 mt-3 border rounded ${
                answered ? 
                option.isCorrect ? 
                "bg-green-200"
                : selectedAnswer === index ? 
                 "bg-red-200"
                 : ""
                 : ""

              }`}>{option.answerText}</button>
            ))}
            <button
             disabled={answered ? "" : "disabled"} 
             onClick={nextQuestion}
             
            className={`${answered ? " bg-green-800" : " bg-green-300"} block w-full text-white rounded m-2 p-2`}>Next question</button>
            <p className='block w-full text-center text-gray-400 text-sm'>Question {currentQuestion +1} of 5</p>
            </div>
          </div>
            }
        </div>
          
      </div>


    </div>
    </>
  )
}

export default Mainq