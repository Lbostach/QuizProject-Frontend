import React, { useEffect, useState } from 'react';

type CheckboxCardProps = {
  label: string;
  isCorrect: boolean;
  isSubmitted: boolean;
};

const CheckboxCard: React.FC<CheckboxCardProps> = ({ label, isCorrect, isSubmitted }) => {
  const backgroundColorClass = isSubmitted ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : '';

  return (
    <div className={`p-8 border rounded shadow-md flex items-center px-64 ${backgroundColorClass}`}>
      <input type="checkbox" id={label} name={label} className="mr-2" />
      <label htmlFor={label} className="select-none">{label}</label>
    </div>
  );
};

const QuestionComponent: React.FC = () => {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState<{ answerText: string, correct: boolean }[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionId] = useState(Math.floor(Math.random() * 3) + 1);

  useEffect(() => {
     // generates a random number between 1 and 10
  
    fetch(`http://localhost:8089/api/questions/${questionId}`)
      .then(response => response.json())
      .then(data => {
        setQuestionText(data.questionText);
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    fetch(`http://localhost:8089/api/questions/${questionId}/answers`)
      .then(response => response.json())
      .then(data => {
        setAnswers(data);
      })
      
      .catch(error => console.error('Error:', error));
  }, [questionId]);

  return (
    <div className="bg-purple-100">
      <div className ="text-center text-2xl font-bold">
      <h1>{questionText} </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
      {answers.map((answer, index) => (
        <CheckboxCard key={index} label={answer.answerText} isCorrect={answer.correct} isSubmitted={isSubmitted} />
      ))}
      </div>
      <div className="flex justify-center">
      <button className="bg-blue-500 text-white font-bold px-64 py-4 rounded" onClick={() => setIsSubmitted(true)}>Submit</button>
      </div>
    </div>
  );
};

export default QuestionComponent;