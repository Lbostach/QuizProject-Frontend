import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionComponent from './QuestionComponent';
import { PostComponent } from './PostComponent';

const App: React.FC = () => {
    const fullText = 'Take the Quiz';
    const [text, setText] = useState(fullText);
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, counter));
        setCounter(counter + 1);
      }, 100); // Adjust speed here
  
      if (counter > fullText.length) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [counter]);
    return (
        <Router>
          <Route path="/post" component={PostComponent} />
            <Route path="/question" component={QuestionComponent} />
            <Route path="/" exact>
            <div className="bg-pink-100">
      <div className="container flex flex-col gap-4 px-4 py-8 md:py-12 lg:py-16 xl:py-24 md:gap-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{text}</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Test your knowledge with our interactive quiz. Scores are shown after completion.
          </p>
        </div>
        <div className="mx-auto max-w-sm">
        <Link
  className="inline-flex items-center justify-center w-full rounded-md border border-gray-200 border-gray-200 bg-white h-11 px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
  to="/question"
>
  Start Quiz
</Link>
        </div>
      </div>
    </div>
            </Route>
        </Router>
    );
};

export default App;