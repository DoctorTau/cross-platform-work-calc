import React, { useState } from 'react';
import './Calc.css';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);
    const [input, setInput] = useState<string>('');

    const handleNumberClick = (num: number) => {
        setInput(prevInput => prevInput + num);
    };

    const handleOperatorClick = (operator: string) => {
        setInput(prevInput => prevInput + operator);
    };

    const handleEqualClick = () => {
        try {
            const calculatedResult = eval(input);
            setResult(calculatedResult);
            setInput(calculatedResult.toString());
        } catch (error) {
            setResult(null);
            setInput('');
        }
    };

    const handleClearClick = () => {
        setResult(null);
        setInput('');
    };

    return (
        <div className='container'>
            <button id='button1' onClick={() => handleNumberClick(1)}>1</button>
            <button id='button2' onClick={() => handleNumberClick(2)}>2</button>
            <button id='button3' onClick={() => handleNumberClick(3)}>3</button>
            <button id='button+' onClick={() => handleOperatorClick('+')}>+</button>
            <button id='button4' onClick={() => handleNumberClick(4)}>4</button>
            <button id='button5' onClick={() => handleNumberClick(5)}>5</button>
            <button id='button6' onClick={() => handleNumberClick(6)}>6</button>
            <button id='button-' onClick={() => handleOperatorClick('-')}>-</button>
            <button id='button7' onClick={() => handleNumberClick(7)}>7</button>
            <button id='button8' onClick={() => handleNumberClick(8)}>8</button>
            <button id='button9' onClick={() => handleNumberClick(9)}>9</button>
            <button id='button0' onClick={() => handleNumberClick(0)}>0</button>
            <button id='button*' onClick={() => handleOperatorClick('*')}>*</button>
            <button id='button/' onClick={() => handleOperatorClick('/')}>/</button>
            <button id='buttonClear' onClick={() => handleClearClick()}>Clear</button>
            <button id='buttonEqual' onClick={() => handleEqualClick()}>=</button>
            <input className='displayEq' type="text" value={input} readOnly />
        </div>
    );
};

export default Calculator;