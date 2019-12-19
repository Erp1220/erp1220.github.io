import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='quiz__container'>
            <h2>Здравствуйте!</h2>
            <Link to="/quizForm">Пройти тест</Link>
        </div>
    );
};

export default Welcome;