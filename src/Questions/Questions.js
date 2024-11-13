import React from "react";


const questions = [
    {
      questionText: 'What is JSX in React?',
      answerOptions: [
        { answerText: 'A JavaScript XML syntax', isCorrect: true },
        { answerText: 'A CSS framework', isCorrect: false },
        { answerText: 'A server-side language', isCorrect: false },
        { answerText: 'A database query language', isCorrect: false },
      ],
    },
    {
      questionText: 'Which hook is used to manage state in a functional component?',
      answerOptions: [
        { answerText: 'useEffect', isCorrect: false },
        { answerText: 'useState', isCorrect: true },
        { answerText: 'useContext', isCorrect: false },
        { answerText: 'useReducer', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the purpose of the useEffect hook?',
      answerOptions: [
        { answerText: 'To handle state updates', isCorrect: false },
        { answerText: 'To perform side effects in functional components', isCorrect: true },
        { answerText: 'To manage component styling', isCorrect: false },
        { answerText: 'To optimize app performance', isCorrect: false },
      ],
    },
    {
      questionText: 'What does "lifting state up" mean in React?',
      answerOptions: [
        { answerText: 'Passing state as props to child components', isCorrect: false },
        { answerText: 'Moving state to a common ancestor to share data between components', isCorrect: true },
        { answerText: 'Creating state in a functional component', isCorrect: false },
        { answerText: 'Using the Context API', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is NOT a lifecycle method in class components?',
      answerOptions: [
        { answerText: 'componentDidMount', isCorrect: false },
        { answerText: 'componentDidUpdate', isCorrect: false },
        { answerText: 'componentWillUnmount', isCorrect: false },
        { answerText: 'useEffect', isCorrect: true },
      ],
    },
  ];
  
  export default questions