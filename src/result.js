import React from 'react';
import { withRouter , Link } from 'react-router-dom';

const Result = (props) => {
    const { numberOfQuests, answers } = props.location.state;
    return (
        <div>
            <p>Вы правильно ответили на {answers} вопросов из {numberOfQuests}</p>
            <Link to="/quizForm">Пройти заново</Link>
        </div>
    );
};

export default withRouter(Result);