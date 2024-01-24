import React, { useEffect, useState } from 'react';

type CheckboxCardProps = {
  label: string;
  isCorrect: boolean;
  isSubmitted: boolean;
};

const CheckboxCard: React.FC<CheckboxCardProps> = ({ label, isCorrect, isSubmitted }) => {
  const backgroundColor = isSubmitted ? (isCorrect ? 'green' : 'red') : '';

  return (
    <div className={`p-8 border rounded shadow-md flex items-center px-64 ${backgroundColor}`}>
      <input type="checkbox" id={label} name={label} className="mr-2" />
      <label htmlFor={label} className="select-none">{label}</label>
    </div>
  );
};

const QuestionComponent: React.FC = () => {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState<{ answerText: string, isCorrect: boolean }[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const questionId = Math.floor(Math.random() * 2) + 1; // generates a random number between 1 and 10
  
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
  }, []);

  return (
    <div className="bg-purple-100">
      <h1>{questionText} hi</h1>
      {answers.map((answer, index) => (
        <CheckboxCard key={index} label={answer.answerText} isCorrect={answer.isCorrect} isSubmitted={isSubmitted} />
      ))}
      <button className="bg-blue-500 text-white font-bold px-64 py-4 rounded" onClick={() => setIsSubmitted(true)}>Submit</button>
    </div>
  );
};

export default QuestionComponent;