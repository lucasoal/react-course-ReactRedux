import './ExpenseItem.css'
import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Tchonareuns');
    // };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;