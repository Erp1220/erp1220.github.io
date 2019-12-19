import React from 'react';

const AnswerItem = ({ answerText, value, id }) => {
    return (
        <div>
            <input type="radio" name="answer" value={value} id={id}/>
            <label htmlFor={id}>{answerText}</label>
        </div>
    );
};

export default AnswerItem;