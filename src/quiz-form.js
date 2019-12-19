import React from 'react';
import jsonData from './jsonData.json';
import AnswerItem from './answer-item';

export default class QuizForm extends React.Component {
    constructor(){
        super();
        this.correctAnswers = 0;
        this.state = {
            questions: jsonData,                    
            q_index: 1,
        };
    }
    
    onClickNextQuest = (e) =>{
        e.preventDefault();
        const {questions, q_index} = this.state;
        const q_length = Object.entries(questions).length;
        const isCorrect = document.forms.quiz_form.elements["answer"].value;

        if (q_index + 1 <= q_length){
            this.correctAnswers = (isCorrect === "true") ? this.correctAnswers+1 : this.correctAnswers;
            
            this.setState(({q_index}) => {                
                return { q_index : q_index+1}                
            })
        }else {
            this.correctAnswers = (isCorrect === "true") ? this.correctAnswers+1 : this.correctAnswers;

            this.props.history.push('/result',
                { answers: this.correctAnswers,
                numberOfQuests: q_length
            });
        }
    };
    
    render () {
        
        const {questions, q_index} = this.state;
        
        const quantity = Object.entries(questions).length;

        const Button = () =>{ 
                return(
                    <button
                        onClick={this.onClickNextQuest}
                        type="submit" 
                        className="form-btn" 
                        id="next">Далее
                    </button>
                );
        };
        
        const QuizForm = () => {
            const {questionText, answers} = questions[q_index];
            
            const renderedAnswers = Object.entries(answers).map((item) => {                 
                const { id, answerText, correct } = item[1];
                return <AnswerItem key={id} answerText = {answerText} value = {correct} id={id} />
            });
        
            return (
            <form name='quiz_form'>
                <div className='quiz_container'>
                    <p className="counter">Пройден(о) {q_index-1} вопрос(ов) из {quantity}</p>
                    <p className="question-text">{questionText}</p>                    
                    {renderedAnswers}        
                    <Button />
                    
                </div>
            </form>
            );
        };
        return <QuizForm />
    }    
  };