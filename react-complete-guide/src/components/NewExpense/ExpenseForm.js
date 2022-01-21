import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
        // setUserInput({ ...userInput, enteredTitle: event.target.value })
        // OR
        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredTitle: event.target.value}
        // });
    }
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({ ...userInput, enteredAmount: event.target.value })

    }
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({ ...userInput, enteredDate: event.target.value })
    }

    const submitHandler = (event) => {
        // Desabilita o reaload da página caso não tenha dados para realizar um request

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expenseData)

        props.onSaveExpenseData(expenseData);
        setEnteredTitle = '';
        setEnteredAmount = '';
        setEnteredDate = '';
    }


    return (
        <form className="new-expense__form" onSubmit={submitHandler}>
            <h2>New Expenses</h2>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.0"
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default ExpenseForm;