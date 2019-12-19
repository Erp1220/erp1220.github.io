import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Welcome from './welcome';
import QuizForm from './quiz-form';
import Result from './result';

class App extends React.Component {
  
  render () {
  return (
    <div className="quiz-wrapper">
      <Router>
        <Route path="/" component={Welcome} exact />
        <Route path="/quizForm" component={QuizForm} />
        <Route path="/result" component={Result} />
      </Router>
    </div>
  );
  }
};

ReactDOM.render (
  <App />, 
  document.querySelector('#root')
);