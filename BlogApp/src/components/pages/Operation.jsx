import React, { useEffect, useRef, useState } from 'react';
import "../style/operation.css"

const Operation = () => {
    const [operation, setOperation] = useState('add');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(null);

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        } else {
            console.log(timerRef.current);
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setTime(0);
    };

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    };

    const handleValue1Change = (e) => {
        setValue1(e.target.value);
    };

    const handleValue2Change = (e) => {
        setValue2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const num1 = value1;
        const num2 = value2;
        let res;
        switch (operation) {
            case 'add':
                res = num1 + num2;
                break;
            case 'sub':
                res = num1 - num2;
                break;
            case 'mul':
                res = num1 * num2;
                break;
            case 'div':
                res = num2 != 0 ? num1 / num2 : 'Do not enter zero';
                break;
            default:
                res = 'Invalid operation';
        }
        setResult(res);
    };


    return (
        <div>
            <h1>This is operation</h1>
            <div className='form-details'>
                <form onSubmit={handleSubmit}>
                    <label className='opeartion'>Select Operation</label>
                    <select name="operation" className='opeartion' value={operation} onChange={handleOperationChange}>
                        <option className='select' value="add">Add</option>
                        <option className='select' value="sub">Subtract</option>
                        <option className='select' value="mul">Multiply</option>
                        <option className='select' value="div">Divide</option>
                    </select>
                    <label className='value1'>Value 1</label>
                    <input type="number" name="value1" className='value1' value={value1} onChange={handleValue1Change} required />
                    <label className='value2'>Value 2</label>
                    <input type="number" name="value2" className='value2' value={value2} onChange={handleValue2Change} required />

                    `{ value1 != 0 && value2 != 0 ? <button className='button' type="submit">Submit</button> : <h2 className='h2field'>Need to the value</h2>}`
                </form>
                {result !== null && (
                    <div>
                        <h2 className='result'>Result: {result}</h2>
                    </div>
                )}
            </div>

            <div className='timer'>
            <h1 className='TimerHeading'>Timer: {time} seconds</h1>
            <button className='button' onClick={handleStart}>Start</button>
            <button className='button' onClick={handlePause}>Pause</button>
            <button className='button' onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default Operation;
