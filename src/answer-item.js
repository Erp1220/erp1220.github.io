import React from 'react';

const AnswerItem = ({ answerText, value, id, onLabelClick }) => {
    return (
        <div>
            <input type="radio" name="answer" value={value} id={id}/>
            <label 
            htmlFor={id}
            onClick={onLabelClick}
            >
                {answerText}
            </label>
        </div>
    );
};

export default AnswerItem;