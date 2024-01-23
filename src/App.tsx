import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionComponent from './QuestionComponent';

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/question" component={QuestionComponent} />
            <Route path="/" exact>
                <div className="h-full p-64 bg-purple-200">
                    <div className="text-6xl text-center text-black border-2 rounded font-bold">Quiz test</div>
                    <div className="flex justify-center items-center mt-8">
                        <Link to="/question">
                            <button className="text-2xl rounded border-2 border-slate-700 bg-white p-2">New Question</button>
                        </Link>
                    </div>
                    <div className="text-s text-center mt-8">
                        idek
                    </div>
                </div>
            </Route>
        </Router>
    );
};

export default App;