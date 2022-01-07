import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = () => {

    /*
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    or
    ...
    */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({...userInput,enteredTitle: event.target.value})
    }
    const amountChangeHandler = (event) => { 
        // setEnteredAmount(event.target.value);
        setUserInput({...userInput,enteredAmount: event.target.value})
        
    }
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({...userInput,enteredDate: event.target.value})
    }

    const buttonChangeHandler = () => { alert('Submitted'); }

    return (
        <form className="new-expense__form">
            <h2>New Expenses</h2>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.0" onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={buttonChangeHandler}>SUBMIT</button>
            </div>
        </form>
    );
}

export default ExpenseForm;